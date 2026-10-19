const translations = {
  en: {
    nav_about:'About',nav_research:'Research',nav_education:'Education',
    hero_label:'USTC · Electronic Engineering & Information Science',hero_subtitle:"Master's Student · LLM Agents & Intelligent Systems",hero_intro:'Exploring how large language model agents can reason, plan, remember, and learn through interaction with the world.',hero_affiliation_1:'University of Science and Technology of China',hero_affiliation_2:'Cross-Media Intelligence Group (USTC-CMI)',link_lab:'Research Group',
    about_title:'About',about_statement:'I am a master\'s student at the <strong>University of Science and Technology of China (USTC)</strong>, in the Department of Electronic Engineering and Information Science, and a member of the <strong>Cross-Media Intelligence Group (USTC-CMI)</strong>.',about_detail:'My primary interest is <strong>LLM Agents</strong> — especially how agents perform multi-step reasoning, long-horizon planning, memory management, and learning from feedback. Previously, I worked on retrieval-augmented generation in my undergraduate thesis.',
    research_title:'Research Interests',r1_title:'LLM Agents',r1_body:'Reasoning, planning, tool use, and reliable multi-step decision making for autonomous language agents.',r2_title:'Agent Memory',r2_body:'How agents retain, retrieve, and use experience to operate effectively across long interactions.',r3_title:'Agentic Reinforcement Learning',r3_body:'Improving agent strategies through rewards, environmental feedback, and adaptive learning.',
    education_title:'Education',present:'Present',master_title:"Master's Student",master_school:'University of Science and Technology of China · Department of Electronic Engineering and Information Science',master_detail:'Cross-Media Intelligence Group (USTC-CMI) · Hefei, China',bachelor_title:"Bachelor's Degree",bachelor_school:'University of Science and Technology of China · School of Artificial Intelligence and Data Science',bachelor_detail:'Undergraduate thesis: A Multi-Stage Optimization-Based Approach for Retrieval-Augmented Generation',
    contact_title:'Interested in similar ideas?',contact_text:"I'm always happy to connect with fellow students and researchers interested in LLM agents and intelligent systems.",footer:'Built with curiosity · USTC, Hefei',back_top:'Back to top ↑'
  },
  zh: {
    nav_about:'关于我',nav_research:'研究兴趣',nav_education:'教育经历',
    hero_label:'中国科学技术大学 · 电子工程与信息科学系',hero_subtitle:'硕士研究生 · 大语言模型智能体与智能系统',hero_intro:'探索大语言模型智能体如何通过推理、规划、记忆以及环境交互，不断提升自主决策和学习能力。',hero_affiliation_1:'中国科学技术大学',hero_affiliation_2:'跨媒体智能课题组（USTC-CMI）',link_lab:'研究团队',
    about_title:'关于我',about_statement:'我目前就读于<strong>中国科学技术大学电子工程与信息科学系</strong>，攻读硕士学位，并在<strong>跨媒体智能课题组（USTC-CMI）</strong>开展科研工作。',about_detail:'我的主要研究兴趣是<strong>大语言模型智能体（LLM Agents）</strong>，尤其关注多步推理、长程规划、记忆管理以及基于反馈的学习。本科期间，我围绕检索增强生成（RAG）开展毕业设计研究。',
    research_title:'研究兴趣',r1_title:'大模型智能体',r1_body:'探索智能体的推理、规划、工具使用及可靠的多步决策能力。',r2_title:'智能体记忆',r2_body:'研究智能体如何在长期交互中存储、检索和有效利用历史经验。',r3_title:'智能体强化学习',r3_body:'利用奖励信号、环境反馈和自适应学习改善智能体策略。',
    education_title:'教育经历',present:'至今',master_title:'硕士研究生',master_school:'中国科学技术大学 · 电子工程与信息科学系',master_detail:'跨媒体智能课题组（USTC-CMI） · 安徽合肥',bachelor_title:'本科',bachelor_school:'中国科学技术大学 · 人工智能与数据科学学院',bachelor_detail:'本科毕业设计：基于多阶段优化的检索增强生成方法',
    contact_title:'对相似研究方向感兴趣？',contact_text:'欢迎与关注大模型智能体、智能系统的同学和研究者交流。',footer:'保持好奇 · 中国科大，合肥',back_top:'返回顶部 ↑'
  }
};
const toggle = document.getElementById('languageToggle');
let language = 'en';
function setLanguage(lang){language=lang;document.documentElement.lang=lang === 'zh'?'zh-CN':'en';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});toggle.textContent=lang==='en'?'中':'EN';toggle.setAttribute('aria-label',lang==='en'?'切换为中文':'Switch to English');}
toggle.addEventListener('click',()=>setLanguage(language==='en'?'zh':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('readingProgress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max?window.scrollY/max*100:0)+'%'},{passive:true});
