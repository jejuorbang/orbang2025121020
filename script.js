// ===========================
// 히어로 이미지 슬라이더
// ===========================
function initHeroSlider() {
    const sliderImages = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;
    const slideInterval = 3000; // 3초마다 전환

    function showSlide(index) {
        // 모든 이미지와 도트의 active 클래스 제거
        sliderImages.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 현재 슬라이드 표시
        sliderImages[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    // 자동 슬라이드
    let slideTimer = setInterval(nextSlide, slideInterval);

    // 도트 클릭 이벤트
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            // 클릭 시 타이머 리셋
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // 이미지 호버 시 자동 슬라이드 일시정지
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    }
}

// ===========================
// 스크롤 애니메이션
// ===========================
function initScrollAnimation() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들
    const elementsToAnimate = document.querySelectorAll(`
        .section-header,
        .design-content,
        .storage-card,
        .durability-content,
        .product-info-wrapper,
        .outro-content,
        .gallery-item
    `);

    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===========================
// 부드러운 스크롤
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// 갤러리 이미지 로딩 최적화
// ===========================
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    } else {
        // Intersection Observer를 사용한 폴백
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===========================
// 구매 버튼 클릭 이벤트
// ===========================
function initPurchaseButtons() {
    const buyButton = document.querySelector('.buy-button');
    const ctaButtons = document.querySelectorAll('.cta-button.primary');

    if (buyButton) {
        buyButton.addEventListener('click', () => {
            alert('구매 페이지로 이동합니다!\n\n제품명: 탐나는친구들(리유저블백)\n가격: 5,000원\n옵션: 주황(봉담이)');
            // 실제 구매 페이지로 이동하는 코드로 교체 가능
            // window.location.href = 'your-purchase-url';
        });
    }
}

// ===========================
// 스크롤 진행률 표시
// ===========================
function initScrollProgress() {
    // 진행률 바 생성
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(to right, #FF8C42, #E67635);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    // 스크롤 이벤트
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// ===========================
// 카운터 애니메이션 (가격)
// ===========================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString('ko-KR');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function initPriceAnimation() {
    const priceValue = document.querySelector('.price-value');
    if (priceValue) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !priceValue.dataset.animated) {
                    priceValue.dataset.animated = 'true';
                    const price = 5000;
                    const currency = priceValue.querySelector('.currency');
                    const currencyText = currency ? currency.outerHTML : '';
                    priceValue.innerHTML = '0';
                    animateValue(priceValue, 0, price, 1500);
                    setTimeout(() => {
                        priceValue.innerHTML = price.toLocaleString('ko-KR') + currencyText;
                    }, 1500);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(priceValue);
    }
}

// ===========================
// 이미지 에러 핸들링
// ===========================
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.error('이미지 로딩 실패:', this.src);
            // 대체 이미지나 플레이스홀더 표시
            this.style.backgroundColor = '#f0f0f0';
            this.style.minHeight = '200px';
            this.alt = '이미지를 불러올 수 없습니다';
        });
    });
}

// ===========================
// 갤러리 호버 효과 강화
// ===========================
function initGalleryEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });

        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
}

// ===========================
// 모바일 메뉴 토글
// ===========================
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            nav.style.position = 'absolute';
            nav.style.top = '100%';
            nav.style.left = '0';
            nav.style.right = '0';
            nav.style.background = 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)';
            nav.style.flexDirection = 'column';
            nav.style.padding = '20px';
            nav.style.gap = '15px';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';

            // 햄버거 아이콘 애니메이션
            menuToggle.classList.toggle('active');
        });

        // 네비게이션 링크 클릭 시 메뉴 닫기
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    nav.style.display = 'none';
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
}

// ===========================
// 모바일 터치 제스처
// ===========================
function initMobileGestures() {
    if ('ontouchstart' in window) {
        const gallery = document.querySelector('.gallery-grid');
        if (gallery) {
            let startX = 0;
            let scrollLeft = 0;

            gallery.addEventListener('touchstart', (e) => {
                startX = e.touches[0].pageX - gallery.offsetLeft;
                scrollLeft = gallery.scrollLeft;
            });

            gallery.addEventListener('touchmove', (e) => {
                const x = e.touches[0].pageX - gallery.offsetLeft;
                const walk = (x - startX) * 2;
                gallery.scrollLeft = scrollLeft - walk;
            });
        }
    }
}

// ===========================
// 페이지 로드 시 실행
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('탐나는친구들 리유저블백 랜딩페이지 로드 완료!');

    // 모든 기능 초기화
    initHeroSlider();
    initScrollAnimation();
    initSmoothScroll();
    initLazyLoading();
    initPurchaseButtons();
    initScrollProgress();
    initPriceAnimation();
    initImageErrorHandling();
    initGalleryEffects();
    initMobileMenu();
    initMobileGestures();

    // 로딩 후 페이지 표시
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// 성능 최적화: 리사이즈 이벤트 디바운싱
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('resize', debounce(() => {
    console.log('화면 크기 조정됨');
    // 필요한 경우 레이아웃 재계산
}, 250));

// ===========================
// 스크롤 성능 최적화
// ===========================
let ticking = false;

function onScroll() {
    // 스크롤 관련 업데이트를 여기에 추가
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
});
