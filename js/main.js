document.addEventListener('DOMContentLoaded', function() {
    // Existing button event listeners  
    const startButton    = document.getElementById('start-button');
    const shownButton    = document.getElementById('shown');
    const downloadButton = document.getElementById('download');
    const contactButton  = document.getElementById('contact');
    const creditButton   = document.getElementById('credit');
    
    if(startButton) {
        startButton.addEventListener('click', function() {
            window.location.href = 'start_game.html';
        });
    }
    
    if(shownButton) {
        shownButton.addEventListener('click', function() {
            window.location.href = 'game_shown.html';
        });
    }
    
    if(downloadButton) {
        downloadButton.addEventListener('click', function() {
            window.location.href = 'download_game.html';
        });
    }
    
    if(contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'contact_way.html';
        });
    }
    
    if(creditButton) {
        creditButton.addEventListener('click', function() {
            window.location.href = 'group_members.html';
        });
    }
    
    // Language switcher code  
    const languageSelector = document.getElementById('language-selector');
    if(languageSelector) {
        languageSelector.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }

    // Mute/Unmute background music functionality
    const bgMusic = document.getElementById('bg-music');
    const closeMusicButton = document.getElementById('close-music');
    if (bgMusic && closeMusicButton) {
        closeMusicButton.addEventListener('click', function() {
            if (!bgMusic.paused) {
                bgMusic.pause();
                closeMusicButton.textContent = "Music Off";
            } else {
                bgMusic.play();
                closeMusicButton.textContent = "Mute Music";
            }
        });
    }
    
    // Extended translation dictionary with changed key names
    const translations = {
        // For index/general pages
        index: {
            headerH1: { en: "Slumberland", cn: "沉睡之地" },
            headerP: { en: "Your adventure begins here!", cn: "你的冒险从这里开始！" }
        },
        // For the group members page
        groupMembers: {
            headerH1: { en: "Group Members", cn: "团队成员" },
            headerP: { en: "Meet the team behind Slumberland", cn: "认识创造沉睡之地的团队" },
            returnHome: { en: "Return Home", cn: "返回首页" }
        },
        // For the start_game page (Renamed to playGame)
        playGame: {
            headerH1: { en: "Play Now", cn: "立即游戏" },
            headerP: { en: "Begin your adventure in Slumberland", cn: "开始你的沉睡之地冒险" },
            sectionH2: { en: "Welcome to Slumberland", cn: "欢迎来到沉睡之地" },
            sectionP: { 
                en: "Slumberland is a magical world filled with wonder and adventure. You play as a hero on a quest to save the kingdom from an evil sorcerer. Along the way, you'll encounter mythical creatures, solve challenging puzzles, and explore breathtaking landscapes. Are you ready to embark on this epic journey?", 
                cn: "沉睡之地是一个充满奇迹与冒险的魔幻世界。你将扮演一位英雄，踏上拯救王国免遭邪恶巫师侵袭的征程。途中你会遇到神秘生物、解开艰难谜题，并探索令人叹为观止的风景。你准备好开始这段史诗般的旅程了吗？" 
            }
        },
        // For the game_shown page (Renamed to gameShowcase)
        gameShowcase: {
            headerH1: { en: "Showcase Game", cn: "游戏展示" },
            containerP: { en: "This is where you describe your game", cn: "在这里描述你的游戏" }
        },
        // For the contact_way page (Renamed to contactUs)
        contactUs: {
            headerH1: { en: "Contact Us", cn: "联系我们" },
            headerP: { en: "We're here to assist you", cn: "我们随时为您服务" },
            h2: { 
                en: ["Email", "Phone", "Address"],
                cn: ["电子邮件", "电话", "地址"]
            }
        },
        // For the download_game page (Renamed to downloadNow)
        downloadNow: {
            headerH1: { en: "Download Now", cn: "立即下载" },
            headerP: { en: "Get the latest version of Slumberland", cn: "获取最新版本的沉睡之地" },
            downloadButtons: {
                en: ["Download Slumberland v1.0", "Download Slumberland v1.1"],
                cn: ["下载沉睡之地 v1.0", "下载沉睡之地 v1.1"]
            }
        }
    };
    
    // Function to update the text on the current page based on language
    function setLanguage(lang) {
        // For the start_game page (using playGame)
        if(document.getElementById('game-intro')) {
            const header = document.querySelector('header');
            if(header){
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.playGame.headerH1[lang] || translations.playGame.headerH1.en;
                    headerP.textContent  = translations.playGame.headerP[lang] || translations.playGame.headerP.en;
                }
            }
            const gameIntroH2 = document.querySelector('#game-intro h2');
            const gameIntroP  = document.querySelector('#game-intro p');
            if(gameIntroH2 && gameIntroP) {
                gameIntroH2.textContent = translations.playGame.sectionH2[lang] || translations.playGame.sectionH2.en;
                gameIntroP.textContent  = translations.playGame.sectionP[lang] || translations.playGame.sectionP.en;
            }
        }
        
        // For the game_shown page (using gameShowcase)
        if(document.querySelector('.container') && document.title.indexOf("Game Showcase") !== -1) {
            const container = document.querySelector('.container');
            const headerH1 = container.querySelector("h1");
            const paragraph = container.querySelector("p");
            if(headerH1 && paragraph) {
                headerH1.textContent = translations.gameShowcase.headerH1[lang] || translations.gameShowcase.headerH1.en;
                paragraph.textContent = translations.gameShowcase.containerP[lang] || translations.gameShowcase.containerP.en;
            }
        }
        
        // For the contact_way page (using contactUs)
        if(document.getElementById('contact-info')) {
            const header = document.querySelector('header');
            if(header){
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.contactUs.headerH1[lang] || translations.contactUs.headerH1.en;
                    headerP.textContent  = translations.contactUs.headerP[lang] || translations.contactUs.headerP.en;
                }
            }
            // Update the h2 elements inside the contact-info section
            const h2Elements = document.querySelectorAll('#contact-info div h2');
            if(h2Elements.length === translations.contactUs.h2.en.length) {
                h2Elements.forEach((elem, index) => {
                    elem.textContent = translations.contactUs.h2[lang][index] || translations.contactUs.h2.en[index];
                });
            }
        }
        
        // For the download_game page (using downloadNow)
        if(document.getElementById('download-links')) {
            const header = document.querySelector('header');
            if(header){
                const headerH1 = header.querySelector("h1");
                const headerP  = header.querySelector("p");
                if(headerH1 && headerP) {
                    headerH1.textContent = translations.downloadNow.headerH1[lang] || translations.downloadNow.headerH1.en;
                    headerP.textContent  = translations.downloadNow.headerP[lang] || translations.downloadNow.headerP.en;
                }
            }
            // Update download button texts
            const downloadButtons = document.querySelectorAll('.download_button');
            if(downloadButtons.length === translations.downloadNow.downloadButtons.en.length) {
                downloadButtons.forEach((btn, index) => {
                    btn.textContent = translations.downloadNow.downloadButtons[lang][index] || translations.downloadNow.downloadButtons.en[index];
                });
            }
        }
        
        // For the index or any other pages using the general translations
        if(document.getElementById('start-game') && !document.getElementById('game-intro')) {
            const headerH1 = document.querySelector('header h1');
            const headerP  = document.querySelector('header p');
            if(headerH1 && headerP) {
                headerH1.textContent = translations.index.headerH1[lang] || translations.index.headerH1.en;
                headerP.textContent  = translations.index.headerP[lang] || translations.index.headerP.en;
            }
        }
        
        // For the group members page
        if(document.getElementById('members')) {
            const headerH1 = document.querySelector('header h1');
            const headerP  = document.querySelector('header p');
            const returnHomeLink = document.querySelector('#return-home a');
            if(headerH1 && headerP) {
                headerH1.textContent = translations.groupMembers.headerH1[lang] || translations.groupMembers.headerH1.en;
                headerP.textContent  = translations.groupMembers.headerP[lang] || translations.groupMembers.headerP.en;
            }
            if(returnHomeLink) {
                returnHomeLink.textContent = translations.groupMembers.returnHome[lang] || translations.groupMembers.returnHome.en;
            }
        }
    }
});