document.addEventListener('DOMContentLoaded', () => {
    const viewpoint1 = document.getElementById('viewpoint1');
    const viewpoint2 = document.getElementById('viewpoint2');
    const viewpoint3 = document.getElementById('viewpoint3');
    const viewpoint4 = document.getElementById('viewpoint4');
    const viewpoint5 = document.getElementById('viewpoint5');
    const infoWindow = document.getElementById('info-window');
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');
    const closeInfo = document.getElementById('close-info');
    const nextImageBtn = document.getElementById('next-image');
    const prevImageBtn = document.getElementById('prev-image'); 
    let currentViewpoint = null;

    function showInfo(viewpoint) {
        const overlay = document.getElementById('overlay');
        overlay.classList.remove('hidden');

        const viewpointInfo = viewpoints[viewpoint.id];
        infoTitle.innerText = viewpointInfo.title;
        infoContent.innerHTML = viewpointInfo.content;
        infoWindow.classList.remove('hidden');
        currentViewpoint = viewpoint.id;
        currentImageIndex = 0;
        updateImageDisplay();
    }

    function hideInfo() {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('hidden');
        infoWindow.classList.add('hidden');
    }

    let currentImageIndex = 0;

    function updateImageDisplay() {
        const viewpointInfo = viewpoints[currentViewpoint];
        const images = viewpointInfo.images || [];

        if (images.length > 0) {
            const iamgeElement = document.getElementById('info-image');
            iamgeElement.src = images[currentImageIndex];
        }
        
        nextImageBtn.disabled = currentImageIndex === images.length - 1;
        prevImageBtn.disabled = currentImageIndex === 0;
    }

    nextImageBtn.addEventListener('click', () => {
        currentImageIndex++;
        updateImageDisplay();
    });

    prevImageBtn.addEventListener('click', () => {
        currentImageIndex--;
        updateImageDisplay();
    });

    viewpoint1.addEventListener('click', () => showInfo(viewpoint1));
    viewpoint2.addEventListener('click', () => showInfo(viewpoint2));
    viewpoint3.addEventListener('click', () => showInfo(viewpoint3));
    viewpoint4.addEventListener('click', () => showInfo(viewpoint4));
    viewpoint5.addEventListener('click', () => showInfo(viewpoint5));
    closeInfo.addEventListener('click', hideInfo);

    // Sample data for viewpoint information
    const viewpoints = {
        viewpoint1: {
            title: "폭풍의 언덕(동너븐덕)",
            content: "<p>폭풍의 언덕은 수백 년 동안 바다의 파도와 바람에 의해 서서히 형성된 지형이다. 강력한 바람과 파도가 해안을 침식시키면서, 이 언덕이 형성되었다.</p><p>시야가 탁 트여있어 일출, 일몰 포인트로 유명하다.</p>",
            images: ["images/brm1.jpg", "images/brm2.jpg"]
        },
        viewpoint2: {
            title: "강정천(江汀川)",
            content: "<p>옛날부터 물이 많아 마을 이름이 물강(江) 물정(汀)인 서귀포시 최남단 마을로 깨끗함과 아름다움을 그대로 간직하고 있는 강정마을이 있다. 이 마을 동쪽에 위치한 강정천은 한라산의 천연 암반수가 사시사철 흘러내려 수려한 자연환경과 함께 조화를 이루는 명소로 한여름에는 더위를 피하여 찾아오는 피서객으로 만원을 이루고 있다.</p><p>제주에서는 보기 힘든 은어가 서식하고 있고, 천연기념물 제 327호인 원앙새가 무리를 지어 날아다니는 광경을 목격할 수도 있다.</p><p>강정천은 평소 건천을 이루는 제주의 일반 하천과는 달리 사철 맑은 물이 흐르는 곳이며, 서귀포 식수의 70%를 공급하는 생명의 젖줄이기도 하다.</p>",
            images: ["images/gjc1.jpg", "images/gjc2.jpg"]
        },
        viewpoint3: {
            title: "황우지 12굴",
            content: "<p>제 2차 세계대전 시 일본군이 미군의 공격을 대비해 어뢰정을 숨기기 위해 만들어 놓은 12개의 인공굴이다.<br>해안선을 따라 일정한 간격을 두고 만들어져 있으며 동굴의 높이는 약 3m, 폭은 3~4m, 깊이는 10~30m에 이른다.</p><p>해수에 의해 해안가 암반이 12곳 진지 동굴의 내부와 입구로 밀려들어 바닥이 울퉁불퉁 하고, 일본 자살 특공대의 특공 보트의 진입로 역할을 했을 시멘트 도로 또한 파손되어 흔적을 찾아보기 어렵다.</p><p>이러한 진지 동굴은 일제 강점기 일본의 식민지 지배상과 식민지 백성에 대한 강제 노역의 현장을 고증하고 있다는 점에서 역사적 보존 가치가 있다.</p><p>또 인공 동굴과 자연의 어우러짐을 통해 아름다움을 느낄 수 있지만 제주 전역을 요새로 만드는 일에 제주 사람들의 피를 말리고 뼈를 깎는 고통이 뒤따랐다.</p>",
            images: ["images/twvc1.jpg", "images/twvc2.jpg"]
        },
        viewpoint4: {
            title: "외돌개",
            content: "<p>외돌개의 높이는 20여m, 폭은 7~10m로 화산이 폭발하여 분출된 용암지대에 파도의 침식작용으로 형성된 돌기둥으로 수직의 해식절벽이 발달한 주변 해안과 해식동굴이 함께 어우러져 특이한 해안 절경을 연출하는 명승지이다.</p><p>바다에 나가 돌아오지 않는 할아버지를 기다리던 할머니가 돌로 굳어 외돌개가 되었다는 할망바위 전설이 있다.</p>",
            images: ["images/wdg1.jpg", "images/wdg2.jpg"]
        },
        viewpoint5: {
            title: "선녀탕",
            content: "<p>올레길 7코스에 속해 있는 황우지선녀탕은 서귀포의 자연명소이자 천연 파도 풀장으로 여름 물놀이 명소 및 포토스팟으로 알려져 있다.</p><p>황우지는 무지개라는 뜻의 제주어 [황고지]에서 나온 말로, 무지개 모양의 둥근 해안 절경 때문에 황우지 선녀탕이라는 이름이 붙었다고 전해진다. 황우지해안은 완만한 만의 형태를 이루고 있고, 돌기둥처럼 선 바위들이 파도를 막아주는 형상을 하고 있다.</p><p>황우지선녀탕은 바닷물이 이동하면서 파도를 만들어 천연 파도 풀장이 되는 곳으로 사람들이 많이 찾는다. 현재는 낙석위험으로 출입제한 안내문이 있으며 선녀탕 입구를 경고 테이프로 막아 놓고 출입금지인 상태이다.</p>", 
            images: ["images/snt1.jpg", "images/snt2.jpg"]
        }
    };
});

document.addEventListener('DOMContentLoaded', function() {
    const viewpoints = document.querySelectorAll('.viewpoint');

    viewpoints.forEach(viewpoint => {
        viewpoint.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)'; // Scale up on hover
        });

        viewpoint.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Restore original scale on mouse leave
        });
    });
});

