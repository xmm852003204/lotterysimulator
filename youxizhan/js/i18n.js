const translations = {
    en: {
        pageTitle: "Lottery Simulator - Try Your Luck Without Losing Money",
        nav: {
            about: "About",
            play: "Play Now",
            odds: "Odds",
            faq: "FAQ"
        },
        hero: {
            title: "Lottery Simulator",
            tagline: "Experience the thrill of lottery without risking your money",
            playButton: "Play Now",
            learnMore: "Learn More"
        },
        about: {
            title: "About Lottery Simulator",
            desc1: "Lottery Simulator is an educational game that demonstrates the real odds of winning lottery games. Instead of spending your hard-earned money on actual lottery tickets, you can experience the same excitement virtually and learn about probability in the process.",
            desc2: "This simulator was created to help people understand just how unlikely it is to win big lottery prizes, while still enjoying the fun of playing."
        },
        play: {
            title: "Play Lottery Simulator",
            intro: "Try your luck with our realistic lottery simulator and see if you can beat the odds!",
            notice: "For the best gaming experience, rotate your device to landscape mode."
        },
        explore: {
            title: "Explore More Games",
            adventure: {
                title: "Adventure",
                desc: "Explore thrilling worlds"
            },
            puzzle: {
                title: "Puzzle",
                desc: "Challenge your mind"
            },
            strategy: {
                title: "Strategy",
                desc: "Plan your victory"
            },
            simulation: {
                title: "Simulation",
                desc: "Experience reality"
            }
        }
    },
    zh: {
        pageTitle: "彩票模拟器 - 零成本体验彩票乐趣",
        nav: {
            about: "关于",
            play: "开始游戏",
            odds: "中奖概率",
            faq: "常见问题"
        },
        hero: {
            title: "彩票模拟器",
            tagline: "体验刺激的彩票游戏，无需花费真金白银",
            playButton: "立即体验",
            learnMore: "了解更多"
        },
        about: {
            title: "关于彩票模拟器",
            desc1: "彩票模拟器是一款教育类游戏，展示了真实彩票游戏中的中奖概率。无需花费真实金钱购买彩票，您就能在这里体验到相同的刺激感，同时学习概率知识。",
            desc2: "创建这个模拟器的目的是帮助人们理解中大奖是多么的困难，同时又能享受游戏的乐趣。"
        },
        play: {
            title: "开始游戏",
            intro: "试试你的运气，看看能否战胜概率！",
            notice: "为获得最佳游戏体验，请将设备横向放置。"
        },
        explore: {
            title: "探索更多游戏",
            adventure: {
                title: "冒险",
                desc: "探索刺激世界"
            },
            puzzle: {
                title: "解谜",
                desc: "挑战你的思维"
            },
            strategy: {
                title: "策略",
                desc: "规划你的胜利"
            },
            simulation: {
                title: "模拟",
                desc: "体验真实世界"
            }
        }
    }
};

function changeLanguage(lang) {
    // 设置语言
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // 更新页面标题
    document.title = translations[lang].pageTitle;
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[lang];
        
        try {
            keys.forEach(key => {
                value = value[key];
            });
            
            if (value) {
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            }
        } catch (error) {
            console.warn(`Translation missing: ${keys.join('.')} for language: ${lang}`);
        }
    });
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', () => {
    // 获取保存的语言设置或使用浏览器默认语言
    const savedLanguage = localStorage.getItem('preferredLanguage') || 
                         (navigator.language.startsWith('zh') ? 'zh' : 'en');
    
    // 设置语言选择器的值
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    
    // 应用语言设置
    changeLanguage(savedLanguage);
});