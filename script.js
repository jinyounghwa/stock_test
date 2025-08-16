// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료');
    
    // 차트 초기화
    initializeCharts();
    
    // 스크롤 애니메이션
    initializeScrollAnimations();
    
    // 네비게이션 활성화
    initializeNavigation();
    
    // 실시간 데이터 업데이트 시뮬레이션
    initializeRealTimeUpdates();
});

// 차트 초기화 함수
function initializeCharts() {
    console.log('차트 초기화 시작');
    
    // 히어로 섹션 차트 (주가 추이)
    const heroCtx = document.getElementById('heroChart');
    if (heroCtx) {
        console.log('히어로 차트 초기화');
        try {
            new Chart(heroCtx, {
                type: 'line',
                data: {
                    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                    datasets: [{
                        label: '애플 주가 (AAPL)',
                        data: [150, 155, 160, 165, 170, 175],
                        borderColor: '#FFD700',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#FFD700',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.8)'
                            }
                        },
                        y: {
                            display: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                callback: function(value) {
                                    return '$' + value;
                                }
                            }
                        }
                    },
                    elements: {
                        point: {
                            hoverRadius: 8
                        }
                    }
                }
            });
            console.log('히어로 차트 초기화 완료');
        } catch (error) {
            console.error('히어로 차트 초기화 오류:', error);
        }
    } else {
        console.warn('히어로 차트 캔버스를 찾을 수 없습니다');
    }

    // 매출 추이 차트
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        console.log('매출 차트 초기화');
        try {
            new Chart(revenueCtx, {
                type: 'bar',
                data: {
                    labels: ['2019', '2020', '2021', '2022', '2023'],
                    datasets: [{
                        label: '연간 매출 (십억 달러)',
                        data: [260.2, 274.5, 365.8, 394.3, 383.3],
                        backgroundColor: [
                            'rgba(0, 122, 255, 0.8)',
                            'rgba(88, 86, 214, 0.8)',
                            'rgba(52, 199, 89, 0.8)',
                            'rgba(255, 149, 0, 0.8)',
                            'rgba(255, 59, 48, 0.8)'
                        ],
                        borderColor: [
                            'rgba(0, 122, 255, 1)',
                            'rgba(88, 86, 214, 1)',
                            'rgba(52, 199, 89, 1)',
                            'rgba(255, 149, 0, 1)',
                            'rgba(255, 59, 48, 1)'
                        ],
                        borderWidth: 2,
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return '매출: $' + context.parsed.y + 'B';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value + 'B';
                                }
                            }
                        }
                    }
                }
            });
            console.log('매출 차트 초기화 완료');
        } catch (error) {
            console.error('매출 차트 초기화 오류:', error);
        }
    } else {
        console.warn('매출 차트 캔버스를 찾을 수 없습니다');
    }

    // 순이익 차트
    const profitCtx = document.getElementById('profitChart');
    if (profitCtx) {
        console.log('순이익 차트 초기화');
        try {
            new Chart(profitCtx, {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: '2022 순이익',
                        data: [34.6, 25.0, 20.7, 30.0],
                        borderColor: '#34C759',
                        backgroundColor: 'rgba(52, 199, 89, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4
                    }, {
                        label: '2023 순이익',
                        data: [30.0, 24.2, 21.9, 33.9],
                        borderColor: '#FF9500',
                        backgroundColor: 'rgba(255, 149, 0, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                padding: 20
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': $' + context.parsed.y + 'B';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return '$' + value + 'B';
                                }
                            }
                        }
                    }
                }
            });
            console.log('순이익 차트 초기화 완료');
        } catch (error) {
            console.error('순이익 차트 초기화 오류:', error);
        }
    } else {
        console.warn('순이익 차트 캔버스를 찾을 수 없습니다');
    }

    // 업종 대비 성과 차트
    const comparisonCtx = document.getElementById('comparisonChart');
    if (comparisonCtx) {
        console.log('비교 차트 초기화');
        try {
            new Chart(comparisonCtx, {
                type: 'doughnut',
                data: {
                    labels: ['애플 (AAPL)', 'S&P 500', '나스닥', '기타'],
                    datasets: [{
                        data: [15.2, 8.5, 12.1, 5.3],
                        backgroundColor: [
                            '#007AFF',
                            '#34C759',
                            '#FF9500',
                            '#8E8E93'
                        ],
                        borderColor: '#fff',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                padding: 15
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.parsed + '%';
                                }
                            }
                        }
                    }
                }
            });
            console.log('비교 차트 초기화 완료');
        } catch (error) {
            console.error('비교 차트 초기화 오류:', error);
        }
    } else {
        console.warn('비교 차트 캔버스를 찾을 수 없습니다');
    }
    
    console.log('모든 차트 초기화 완료');
}

// 스크롤 애니메이션 초기화
function initializeScrollAnimations() {
    const observerOptions = {
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

    // 애니메이션을 적용할 요소들 선택
    const animatedElements = document.querySelectorAll('.info-card, .chart-card, .analysis-content, .outlook-card');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// 네비게이션 활성화
function initializeNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // 부드러운 스크롤
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 실시간 데이터 업데이트 시뮬레이션
function initializeRealTimeUpdates() {
    const priceElement = document.querySelector('.price-item h3');
    const changeElement = document.querySelector('.price-item:nth-child(2) h3');
    
    if (priceElement && changeElement) {
        let currentPrice = 175.43;
        let currentChange = 2.34;
        
        setInterval(() => {
            // 가격 변동 시뮬레이션
            const priceChange = (Math.random() - 0.5) * 2;
            currentPrice += priceChange;
            currentChange = (priceChange / (currentPrice - priceChange)) * 100;
            
            // 가격 표시 업데이트
            priceElement.textContent = '$' + currentPrice.toFixed(2);
            changeElement.textContent = (currentChange >= 0 ? '+' : '') + currentChange.toFixed(2) + '%';
            
            // 색상 변경
            if (currentChange >= 0) {
                changeElement.className = 'text-success mb-1';
            } else {
                changeElement.className = 'text-danger mb-1';
            }
        }, 5000); // 5초마다 업데이트
    }
}

// 차트 반응형 처리
window.addEventListener('resize', function() {
    // Chart.js 차트들이 자동으로 반응형을 처리하지만,
    // 추가적인 커스텀 처리가 필요한 경우 여기에 추가
});

// 데이터 내보내기 기능 (향후 확장용)
function exportData() {
    const data = {
        company: 'Apple Inc. (AAPL)',
        currentPrice: 175.43,
        marketCap: '2.8T',
        peRatio: 28.5,
        dividendYield: 0.51,
        timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'apple-stock-data.json';
    link.click();
    
    URL.revokeObjectURL(url);
}

// 인쇄 기능
function printReport() {
    window.print();
}

// 다크 모드 토글 (향후 확장용)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 페이지 로드 시 다크 모드 상태 복원
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// 성능 모니터링
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('페이지 로드 시간:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    });
}

// 에러 처리
window.addEventListener('error', function(e) {
    console.error('JavaScript 오류:', e.error);
});

// 차트 로딩 상태 표시
function showChartLoading(chartId) {
    const canvas = document.getElementById(chartId);
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#6c757d';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('차트 로딩 중...', canvas.width / 2, canvas.height / 2);
    }
}

// 차트 데이터 새로고침 (향후 실시간 API 연동용)
function refreshChartData() {
    // 차트 데이터를 새로고침하는 로직
    console.log('차트 데이터 새로고침 중...');
    
    // 실제 구현에서는 API 호출을 통해 최신 데이터를 가져옴
    setTimeout(() => {
        console.log('차트 데이터 새로고침 완료');
    }, 1000);
}
