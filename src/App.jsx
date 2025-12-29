import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ChevronDown,
  Code2,
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  BookOpen,
  MapPin,
} from "lucide-react";

// --- 数据源 (Data Source) ---
const DATA = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
    },
    hero: {
      name: "Zhaohan Gao",
      titles: ["Data Engineer", "Software Engineer", "Data Scientist"],
      cta: "View Resume",
      contact: "Contact Me",
    },
    about: {
      title: "About Me",
      content:
        "Passionate software developer with a strong background in full-stack development and machine learning. Seeking opportunities to apply my skills in innovative projects.",
    },
    contact: {
      phone: "+31-657109322",
      email: "gaozhaohan22@gmail.com",
      location: "Netherlands",
    },
    education: [
      {
        school: "VU Amsterdam & University of Amsterdam",
        degree: "Master of Science in Computer Science",
        meta: "Amsterdam, Netherlands",
        date: "09/2024 - 08/2026",
        desc: "Major courses: Data Mining Techniques, Fundamental of Adaptive Software, Green Lab, Security and Machine Learning",
      },
      {
        school: "Northeast Normal University",
        degree: "Bachelor of Engineering in Software Engineering",
        meta: "Changchun, China",
        date: "09/2019 - 06/2023",
        desc: "Major courses: Software Development, Database, Operating Systems, Object-Oriented Programming",
      },
    ],
    experience: [
      {
        role: "Data Scientist Intern",
        company: "Versuni",
        date: "10/2025 - Present",
        location: "Amsterdam, North Holland, Netherlands",
        details: [
          "Built and maintained ERP integration services in a TypeScript-based e-commerce backend, enabling real-time status tracking and frontend visualization for Orders, Quotes, and Payments.",
          "Accelerated legacy cron jobs for syncing Payment data by optimizing SQL queries using queryBuilder, implementing effective indexing strategies, avoiding redundant queries, and enabling batch operations—cutting runtime by 50%.",
          "Enhanced RPA scripts for remote dealer terminal automation by introducing robust retry logic and reducing failure rates, lowering manual intervention by over 80%.",
          "Achieved over 95% unit test coverage using Jest with mocks, stubs, and type-safe fixtures.",
        ],
      },
      {
        role: "Full Stack Developer Intern",
        company: "Pluxbox",
        date: "05/2025 - 10/2025",
        location: "Hilversum, North Holland, Netherlands",
        details: [
          "Developed and improved Java Spring Boot apps, aiding 5,000+ employees.",
          "Optimized frontend with React & Kendo UI, improving page load speed by 20%.",
          "Implemented async backend processing & Redis rate limiting for high concurrency.",
          "Replaced Python scripts with Django API, boosting video stream loading by 50%.",
          "Set up CI/CD on Azure DevOps for zero-downtime delivery.",
        ],
      },
      {
        role: "Data Engineer Intern",
        company: "NIO",
        date: "12/2024 - 05/2025",
        location: "Amsterdam, North Holland, Netherlands",
        details: [
          "Developed procurement backend using Spring Boot & MySQL.",
          "Rewrote product details module ensuring high availability.",
          "Conducted comprehensive JUnit5 testing.",
        ],
      },
      {
        role: "Full Stack Developer",
        company: "Jack Technology",
        date: "07/2023 - 07/2024",
        location: "Taizhou, Zhejiang, China",
        details: [
          "Developed procurement backend using Spring Boot & MySQL.",
          "Rewrote product details module ensuring high availability.",
          "Conducted comprehensive JUnit5 testing.",
        ],
      },
    ],
    skills: {
      languages: "Python, Java, JavaScript",
      knowledge:
        "Databricks, PySpark, MySQL",
      frameworks: "Spring Boot, Vue.js, React.js",
      tools: "Git, Docker, Kubernetes, Linux, Azure DevOps, AWS",
    },
  },
  zh: {
    nav: {
      about: "关于",
      experience: "工作经历",
      skills: "技能栈",
    },
    hero: {
      name: "崔建彬",
      titles: ["软件开发工程师", "研究生", "全栈开发者"],
      cta: "查看作品",
      contact: "联系我",
    },
    about: {
      title: "个人简介",
      content:
        "热衷于软件开发的工程师，拥有扎实的全栈开发和机器学习背景。寻求机会将我的技能应用于创新项目中。",
    },
    contact: {
      phone: "+86-15266052110",
      email: "jianbincui_buaa@outlook.com",
      location: "中国 北京",
    },
    education: [
      {
        school: "McMaster University (麦克马斯特大学)",
        degree: "计算机科学与技术专业 | 研究生",
        meta: "GPA: 3.9/4.0 | 加拿大 汉密尔顿",
        date: "09/2022 - 12/2024",
        desc: "研究领域：深度学习, 图神经网络, 可解释性与安全性",
      },
      {
        school: "北京航空航天大学",
        degree: "计算机科学与技术专业 | 本科",
        meta: "GPA: 89/100 | 排名: 20% | 中国 北京",
        date: "09/2018 - 06/2022",
        desc: "主要课程：软件开发, 数据库, 操作系统, 面向对象编程等",
      },
    ],
    experience: [
      {
        role: "软件开发工程师",
        company: "ToolBX US Inc.",
        date: "02/2025 - 至今",
        location: "多伦多, 加拿大",
        details: [
          "在基于 TypeScript 的电商后端构建并维护 ERP 集成服务，实现了订单、报价和支付状态的实时追踪与前端可视化。",
          "通过优化 SQL 查询（使用 queryBuilder）、实施有效索引策略、避免冗余查询及启用批量操作，加速了支付数据同步的遗留定时任务，运行时间缩减 50%。",
          "增强了远程经销商终端自动化的 RPA 脚本，引入健壮的重试机制并降低失败率，减少了超过 80% 的人工干预。",
          "使用 Jest（配合 mocks, stubs 和类型安全的 fixtures）实现了超过 95% 的单元测试覆盖率。",
        ],
      },
      {
        role: "全栈开发实习生 (全职)",
        company: "FGF Brands",
        date: "09/2023 - 04/2024",
        location: "多伦多, 加拿大",
        details: [
          "开发并改进 Java Spring Boot 应用，服务 5000+ 员工。",
          "使用 React & Kendo UI 优化前端，页面加载速度提升 20%。",
          "通过 Redis 限流和异步处理优化后端，确保高并发稳定性。",
          "用 Django API 替代脚本调用，视频流加载速度提升 50%。",
          "搭建 Azure DevOps CI/CD 流水线，实现零停机交付。",
        ],
      },
      {
        role: "开发实习生",
        company: "中石化胜利油田",
        date: "06/2022 - 08/2022",
        location: "山东, 中国",
        details: [
          "使用 Spring Boot & MySQL 开发采购网站后端。",
          "重构商品详情模块，确保系统高可用性。",
          "使用 JUnit5 进行全面单元测试。",
        ],
      },
    ],
    skills: {
      languages: "Python, C++, Java, 英语 (托福 100)",
      knowledge:
        "MySQL, OOP/OOD, CI/CD, Unit Test, RESTful APIs, PyTorch, Keras",
      frameworks: "Flask, Django, Spring Boot, Vue.js, React.js, ASP.NET",
      tools: "Git, Docker, Postman, Linux, Azure DevOps",
    },
  },
};

// --- 组件 Components ---

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex flex-col items-start mb-10 group">
    <div className="flex items-center gap-3">
      {Icon && <Icon size={28} className="text-slate-900" strokeWidth={1.5} />}
      <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
        {children}
      </h2>
    </div>
    <div className="h-1 w-12 bg-slate-200 mt-4 rounded-full group-hover:w-24 transition-all duration-500" />
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white p-8 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]
    hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border border-slate-100
    ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-slate-100 text-slate-700 border border-slate-200/50">
    {children}
  </span>
);

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

// --- 主程序 App ---

export default function Portfolio() {
  const [lang, setLang] = useState("en");
  const t = DATA[lang];
  const [scrolled, setScrolled] = useState(false);

  // --- [修改处 1] 滚轮动画核心逻辑 ---
  const [titleIndex, setTitleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 1. 构建显示用的列表：在末尾追加第一个元素，实现无缝连接
  // 例如：["A", "B"] -> ["A", "B", "A(副本)"]
  const displayTitles = [...t.hero.titles, t.hero.titles[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => {
        // 正常滚动到下一个
        setIsTransitioning(true);
        return prev + 1;
      });
    }, 3000); // 每3秒滚动一次

    return () => clearInterval(interval);
  }, [t.hero.titles]);

  // 2. 监听滚动：如果滚动到了最后一个（副本），则瞬间重置回第一个
  useEffect(() => {
    if (titleIndex === t.hero.titles.length) {
      // 等待 CSS 动画播放完毕 (700ms)
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // 关闭动画（瞬间跳转）
        setTitleIndex(0); // 重置回索引 0
      }, 700); // 这个时间必须和 CSS duration 保持一致

      return () => clearTimeout(timeout);
    }
  }, [titleIndex, t.hero.titles.length]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 导航栏 Navbar - Apple Style Frosted Glass */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <h1
            className="text-xl font-bold tracking-tighter cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => scrollTo("hero")}
          >
            ZG.
          </h1>

          <div className="hidden md:flex gap-8 text-[13px] font-medium tracking-wide text-slate-500">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="hover:text-slate-900 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setLang((l) => (l === "en" ? "zh" : "en"))}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200
                transition-all text-xs font-semibold text-slate-700 tracking-wide"
          >
            <Globe size={14} />
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </nav>

      {/* 英雄区域 Hero Section - Clean & Airy */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 z-10 scroll-mt-24"
      >
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-tight">
                {t.hero.name}
              </h1>

              {/* --- [修改处 2] 修改了这里：使用 React 状态控制的垂直滚动 --- */}
              {/* --- 修复部分 --- */}
              {/* --- [修改处 2] 渲染部分 --- */}
              <div className="h-10 overflow-hidden mt-2">
                <div
                  // 只有在 isTransitioning 为 true 时才应用 transition 类
                  // 这样重置回 0 时是瞬间完成的，肉眼看不出跳变
                  className={`flex flex-col ${
                    isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
                  }`}
                  // 使用 rem 进行精确位移：index * 2.5rem (对应 h-10 的高度)
                  style={{ transform: `translateY(-${titleIndex * 2.5}rem)` }}
                >
                  {displayTitles.map((title, i) => (
                    <div
                      key={i}
                      // 确保每一行高度固定为 h-10 (2.5rem)
                      className="h-10 flex-shrink-0 text-2xl md:text-3xl text-slate-500 font-medium flex items-center gap-3"
                    >
                      {title}
                    </div>
                  ))}
                </div>
              </div>
              {/* ------------------------- */}
              {/* ---------------- */}
              {/* ----------------------------------------------------- */}

              <p className="text-xl text-slate-600 max-w-xl leading-relaxed mt-6 font-light">
                {t.about.content}
              </p>

              <div className="flex flex-wrap gap-4 pt-8">
                <button
                  onClick={() => scrollTo("projects")}
                  className="px-8 py-3 bg-slate-900 hover:bg-black
                            text-white rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5
                            flex items-center gap-2"
                >
                  {t.hero.cta}
                  <Code2 size={18} />
                </button>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-900 rounded-full font-medium border border-slate-200 transition-all flex items-center gap-2 hover:shadow-md hover:-translate-y-0.5"
                >
                  {t.hero.contact}
                  <Mail size={18} />
                </a>
              </div>

              <div className="flex gap-6 mt-12 text-slate-400">
                <a
                  href="https://github.com/ZhaohanGao"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  <Github size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gaoz/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-900 transition-colors"
                >
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 cursor-pointer hover:text-slate-900 transition-colors"
          onClick={() => scrollTo("experience")}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </div>
      </section>

      {/* 工作经历 Work Experience - Apple Style Cards */}
      <section id="experience" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionTitle icon={Briefcase}>{t.nav.experience}</SectionTitle>
          </ScrollReveal>

          <div className="space-y-8">
            {t.experience.map((job, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Card>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-slate-50">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {job.role}
                      </h3>
                      <div className="text-lg text-slate-500 font-medium mt-1">
                        {job.company}
                      </div>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0 flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-slate-500 md:justify-end">
                        <MapPin size={14} /> {job.location}
                      </div>
                      <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-600 uppercase tracking-wider self-start md:self-end">
                        {job.date}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.details.map((point, i) => (
                      <li
                        key={i}
                        className="text-slate-600 leading-relaxed text-[15px] flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 教育经历 Education */}
      <section id="education" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {t.education.map((edu, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="group p-8 rounded-2xl bg-[#fbfbfd] border border-slate-100 hover:border-slate-200 transition-all h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-slate-900 mb-4">
                      <GraduationCap size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-mono text-slate-500">
                      {edu.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {edu.school}
                  </h3>
                  <p className="text-slate-600 font-medium mb-4">
                    {edu.degree}
                  </p>
                  <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
                    {edu.meta}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 技能 Skills */}
      <section id="skills" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <SectionTitle icon={Cpu}>{t.nav.skills}</SectionTitle>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">
                    Languages & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {t.skills.languages.split(", ").map((s, i) => (
                      <Badge key={i}>{s}</Badge>
                    ))}
                    {t.skills.frameworks.split(", ").map((s, i) => (
                      <Badge key={i}>{s}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-bold">
                    Tools & Platform
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {t.skills.tools.split(", ").map((s, i) => (
                      <Badge key={i}>{s}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-[#fbfbfd] p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-bold">
                  Knowledge Base
                </h4>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {t.skills.knowledge.split(", ").map((k, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-slate-600 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {k}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm bg-[#fbfbfd]">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href={`mailto:${t.contact.email}`}
            className="hover:text-slate-900 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/ZhaohanGao"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gaoz/"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p>© 2026 {t.hero.name}. Designed with minimalism.</p>
      </footer>
    </div>
  );
}