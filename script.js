document.addEventListener('DOMContentLoaded', () => {
    // تعريف الأصوات
    const soundCorrect = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    const soundWrong = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
    const soundSwipe = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b1c3f4f5c.mp3');
    const soundWin = new Audio('https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate.ogg');
    
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        document.body.classList.remove('hide-header');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        if(prevBtn) prevBtn.style.display = (index === 0) ? 'none' : 'block';
        if(nextBtn) nextBtn.style.display = (index === totalSlides - 1) ? 'none' : 'block';
        
        if(prevBtn) prevBtn.disabled = index === 0;
        if(nextBtn) nextBtn.disabled = index === totalSlides - 1;
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                showSlide(currentIndex);
                soundSwipe.play().catch(e => {});
            }
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                showSlide(currentIndex);
                soundSwipe.play().catch(e => {});
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex < totalSlides - 1) {
            currentIndex++; 
            showSlide(currentIndex);
            soundSwipe.play().catch(e => {});
        } else if (e.key === 'ArrowRight' && currentIndex > 0) {
            currentIndex--; 
            showSlide(currentIndex);
            soundSwipe.play().catch(e => {});
        }
    });

    showSlide(0);

    // ==========================================
    // الأسئلة (صح/غلط + اختياري) - 10 أسئلة
    // ==========================================
    const questions = [
        // 1- صح/غلط
        { 
            question: "قد يتغير موقف الجمهور من لاعب رياضي نتيجة معلومات جديدة يقدمها الإعلام، حتى لو لم تتغير المعرفة العامة للجمهور عن الرياضة.", 
            options: ["صح", "خطأ"], 
            correct: 0 
        },
        // 2- اختياري
        { 
            question: "أي موقف يعكس تغييرًا في المعرفة الرياضية وليس مجرد تغير مؤقت في الاتجاه؟", 
            options: ["غضب المشجع بعد خسارة فريقه.", "حزن الجمهور بسبب إصابة لاعب.", "اكتساب الجمهور مفاهيم جديدة عن طرق احتراف اللاعبين المصريين.", "تشجيع الجمهور لمنتخبه أثناء المباراة."], 
            correct: 2 
        },
        // 3- صح/غلط
        { 
            question: "تقتصر وظيفة الإثارة الجماعية على توجيه الجماهير نحو التعصب، ولا يمكن أن يكون لها تأثير إيجابي.", 
            options: ["صح", "خطأ"], 
            correct: 1 
        },
        // 4- اختياري
        { 
            question: "ما العامل الذي يميز الاستثارة العاطفية عن الإثارة الجماعية؟", 
            options: ["الاستثارة العاطفية تركز على مشاعر الفرد، بينما تهتم الإثارة الجماعية بحشد الجماهير وتوجيهها.", "الاستثارة العاطفية لا تؤثر في الجمهور.", "الإثارة الجماعية لا ترتبط بالمشاعر الوطنية.", "لا يوجد فرق بينهما."], 
            correct: 0 
        },
        // 5- صح/غلط
        { 
            question: "قد تؤدي الاستثارة العاطفية إلى جعل الجمهور يتبنى تفسيرات غير موضوعية لأسباب هزيمة فريقه.", 
            options: ["صح", "خطأ"], 
            correct: 0 
        },
        // 6- اختياري
        { 
            question: "لاعب يرفض الغش في المنافسة بسبب اقتناعه الشخصي بأن النزاهة من القيم الأساسية للرياضة. ما نوع الضبط الذي يعكسه سلوكه؟", 
            options: ["الضبط الخارجي.", "الإثارة الجماعية.", "الضبط الداخلي.", "صياغة الواقع."], 
            correct: 2 
        },
        // 7- صح/غلط
        { 
            question: "عندما يلتزم اللاعب بالقواعد الرياضية خوفًا من مخالفة القيم الشخصية التي يؤمن بها، فإن ذلك يُعد ضبطًا خارجيًا.", 
            options: ["صح", "خطأ"], 
            correct: 1 
        },
        // 8- اختياري
        { 
            question: "عندما يركز الإعلام على جانب واحد من أداء المنتخب ويتجاهل جوانب أخرى، فما النتيجة المحتملة؟", 
            options: ["تكوين صورة كاملة ودقيقة بالضرورة.", "اختفاء تأثير الإعلام على الجمهور.", "تكوين صورة غير مكتملة أو مختلفة عن الواقع.", "زيادة المعرفة الرياضية الصحيحة دائمًا."], 
            correct: 2 
        },
        // 9- صح/غلط
        { 
            question: "قد يؤدي التناقض بين دور الإعلام ودور الأسرة والمدرسة والأندية في التنشئة الرياضية إلى حدوث بلبلة لدى الأفراد.", 
            options: ["صح", "خطأ"], 
            correct: 0 
        },
        // 10- اختياري
        { 
            question: "أي مجموعة من الممارسات تعبّر عن الإعلام الرياضي المسؤول؟", 
            options: ["المبالغة في وصف الفرق، ونشر الشائعات، وإثارة التعصب.", "الاعتماد على مصدر واحد، وتجاهل الحقائق.", "الالتزام بالدقة والمصداقية والموضوعية، وتجنب الشائعات والتعصب.", "التركيز على النتائج فقط، وإهمال القضايا الرياضية."], 
            correct: 2 
        }
    ];

    let currentQuestionIndex = 0;
    let canClick = true;

    function startGame() {
        const loadingScreen = document.getElementById('loading-screen');
        const gamePlayScreen = document.getElementById('game-play-screen');
        const progressBar = document.getElementById('loading-progress');
        
        document.body.classList.add('hide-header');

        if(prevBtn) prevBtn.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        
        currentQuestionIndex = 0;
        
        document.querySelectorAll('.game-screen').forEach(s => s.classList.remove('active'));
        loadingScreen.classList.add('active');
        
        let width = 0;
        const interval = setInterval(() => {
            width += 1;
            progressBar.style.width = width + '%';
            if (width >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.classList.remove('active');
                    gamePlayScreen.classList.add('active');
                    loadQuestion();
                }, 300);
            }
        }, 40); 
    }

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            document.body.classList.remove('hide-header');
            document.getElementById('game-play-screen').classList.remove('active');
            document.getElementById('game-win-screen').classList.add('active');
            soundWin.play();
            
            let duration = 5 * 1000;
            let end = Date.now() + duration;

            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#1B4332', '#C9A227', '#FFFFFF', '#F5F0E1'] });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#1B4332', '#C9A227', '#FFFFFF', '#F5F0E1'] });
                if (Date.now() < end) { requestAnimationFrame(frame); }
            }());
            
            if(prevBtn) prevBtn.style.display = 'block';
            if(nextBtn) nextBtn.style.display = 'block';
            return;
        }

        canClick = true;
        const q = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = q.question;
        
        const optionsBox = document.getElementById('options-box');
        optionsBox.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(index, btn);
            optionsBox.appendChild(btn);
        });
    }

    function checkAnswer(selectedIndex, btnElement) {
        if (!canClick) return;
        canClick = false;

        const correctIndex = questions[currentQuestionIndex].correct;
        
        if (selectedIndex === correctIndex) {
            soundCorrect.play(); 
            btnElement.classList.add('correct');
            fireConfetti();
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1500);
        } else {
            soundWrong.play(); 
            btnElement.classList.add('wrong');
            
            const slideGame = document.getElementById('slide-game');
            if(slideGame) slideGame.classList.add('shake-screen');
            
            setTimeout(() => {
                if(slideGame) slideGame.classList.remove('shake-screen');
                canClick = true;
                btnElement.classList.remove('wrong'); 
            }, 800);
        }
    }

    window.resetGame = function() {
        startGame();
    };

    function fireConfetti() {
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#1B4332', '#C9A227', '#FFFFFF', '#F5F0E1'] });
        }
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'slide-game' && mutation.target.classList.contains('active')) {
                startGame();
            }
        });
    });

    slides.forEach(slide => {
        observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
    });

    // ==========================================
    // 3. المؤشر والانترو والمود الليلي
    // ==========================================
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .option-btn, .nav-btn').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    const typewriterText = document.getElementById('typewriter-text');
    const enterBtn = document.getElementById('enter-btn');
    const introScreen = document.getElementById('intro-screen');
    const textToType = "أهلاً بكم في عالم الإعلام الرياضي...";
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typewriterText.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            const enterBtn = document.getElementById('enter-btn');
            if(enterBtn) enterBtn.classList.add('show-btn');
        }
    }
    typeWriter();

    enterBtn.addEventListener('click', () => {
        introScreen.classList.add('hidden');
    });

    const themeToggleBtn = document.getElementById('theme-toggle');
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if(document.body.classList.contains('dark-mode')){
                themeToggleBtn.innerText = '☀️';
            } else {
                themeToggleBtn.innerText = '🌙';
            }
        });
    }

    let isMuted = false;
    const muteBtn = document.getElementById('mute-toggle');
    if(muteBtn) {
        muteBtn.addEventListener('click', () => {
            isMuted = !isMuted;
            document.querySelectorAll('audio').forEach(audio => { audio.muted = isMuted; });
            soundCorrect.muted = isMuted;
            soundWrong.muted = isMuted;
            soundWin.muted = isMuted;
            soundSwipe.muted = isMuted;
            muteBtn.innerText = isMuted ? '🔇' : '🔊';
        });
    }

});