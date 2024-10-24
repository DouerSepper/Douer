$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "勋章墙 | [姓名]";
            $("#favicon").attr("href", "../assets/images/icon/apex-red-icon.svg");
        }
        else {
            document.title = "正在匹配 | [姓名]";
            $("#favicon").attr("href", "../assets/images/icon/apex-white-icon.svg");
        }
    });


// fetch projects start
function getProjects() {
    return [
        {
            "name": "艾许 Ash",
            "desc": "「找出敌方的弱点，然后灭了敌人。」",
            "image": "apex-grid-tile-legends-ash.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "弹道 Ballistic",
            "desc": "优雅的老派绅士，有着狂野奔放的内心。",
            "image": "apex-grid-tile-legends-ballistic.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "班加罗尔 Bangalore",
            "desc": "「你挑武器，我一样能战胜你。」",
            "image": "apex-grid-tile-legends-bangalore.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "寻血猎犬 Bloodhound",
            "desc": "「我是上天派遣的猎人。」",
            "image": "apex-grid-tile-legends-bloodhound.png.adapt.crop16x9",
            "category": "recon",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "卡特莉丝 Catalyst",
            "desc": "Tressa Crystal Smith 并不适合大家——一名优雅、坚决的女士，相较于大多人类，她更喜欢水晶。",
            "image": "apex-grid-tile-legends-catalyst.png.adapt.crop16x9",
            "category": "controller",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "侵蚀 Caustic",
            "desc": "「我不在乎蝼蚁的野心。」",
            "image": "apex-grid-tile-legends-caustic.png.adapt.crop16x9",
            "category": "controller",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "密客 Crypto",
            "desc": "「做好了准备后，想要害怕都难。」",
            "image": "apex-grid-tile-legends-crypto.png.adapt.crop16x9",
            "category": "recon",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "暴雷 Fuse",
            "desc": "「有什么见不得光的勾当，通通交给我。」",
            "image": "apex-grid-tile-legends-fuse.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "直布罗陀 Gibraltar",
            "desc": "「喂，来动我啊，会很有趣的。」",
            "image": "apex-grid-tile-legends-gibraltar.png.adapt.crop16x9",
            "category": "support",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "地平线 Horizon",
            "desc": "「让我们来玩一下物理法则吧？」",
            "image": "apex-grid-tile-legends-horizon.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "命脉 Lifeline",
            "desc": "「永不放弃想赢就得这样。」",
            "image": "apex-grid-tile-legends-lifeline.png.adapt.crop16x9",
            "category": "support",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "罗芭 Loba",
            "desc": "「战斗往往会流露出一种优雅。容我展示一下。」",
            "image": "apex-grid-tile-legends-loba.png.adapt.crop16x9",
            "category": "msupportern",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "疯狂玛吉 Mad Maggie",
            "desc": "「我可以尽情大闹全世界了。」",
            "image": "apex-grid-tile-legends-maggie.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "幻象 Mirage",
            "desc": "「我从来没有太认真。我一向随心所欲。我是需要改变一下。」",
            "image": "apex-grid-tile-legends-mirage.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "纽卡斯尔 Newcastle",
            "desc": "「躲到我后面，这样就安全了，简单。」",
            "image": "apex-grid-tile-legends-newcastle.png.adapt.crop16x9",
            "category": "support",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "动力小子 Octane",
            "desc": "「哇咧，……真是刺激！」",
            "image": "apex-grid-tile-legends-octane.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "探路者 Pathfinder",
            "desc": "「失败可不是什么好玩的事，所以我从来都不失败。」",
            "image": "apex-grid-tile-legends-pathfinder.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "蕾帕特 Rampart",
            "desc": "「要是我让你失望，应该是因为我不想再带你了。」",
            "image": "apex-grid-tile-legends-rampart.png.adapt.crop16x9",
            "category": "controller",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "亡灵 Revenant",
            "desc": "「我已经见过另一端了，皮囊。那里什么也没有。你什么也不是。」",
            "image": "apex-grid-tile-legends-revenant.png.adapt.crop16x9",
            "category": "assult",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "希尔 Seer",
            "desc": "「要是他们想看，那就让他们看个够。」",
            "image": "apex-grid-tile-legends-seer.png.adapt.crop16x9",
            "category": "recon",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "瓦尔基里 Valkyrie",
            "desc": "「整片天空都是我的地盘。」",
            "image": "apex-grid-tile-legends-valkyrie.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "万塔捷 Vantage",
            "desc": "「我从小就一直在射击。我是个很危险的婴儿。」",
            "image": "apex-grid-tile-legends-vantage.png.adapt.crop16x9",
            "category": "recon",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "沃特森 Wattson",
            "desc": "「力量就是一切，你却错以为你拥有了它。」",
            "image": "apex-grid-tile-legends-wattson.png.adapt.crop16x9",
            "category": "controller",
            "links": {
                "view": "#",
                "code": "#",
            }
        },
        {
            "name": "恶灵 Wraith",
            "desc": "「生与死不过一线之间，你可以到那里找我。」",
            "image": "apex-grid-tile-legends-wraith.png.adapt.crop16x9",
            "category": "shirmisher",
            "links": {
                "view": "#",
                "code": "#",
            }
        }
    ];
}

function showProjects() {
    let projects = getProjects();
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}" >
        <div class="box tilt" style="width: 360px; margin: 1rem">
      <img draggable="false" src="../assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-hand-sparkles"></i> 问候</a>
            <a href="${project.links.code}" class="btn" target="_blank"><i class="fas fa-thumbs-up"></i> 赞赏</a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // // vanilla tilt.js
    // VanillaTilt.init(document.querySelectorAll(".tilt"), {
    //     max: 20,
    // });
    // // vanilla tilt.js  

    // /* ===== 滚动展示动画 ===== */
    // const srtop = ScrollReveal({
    //     origin: 'bottom',
    //     distance: '80px',
    //     duration: 1000,
    //     reset: true
    // });

    // // /* 倾斜卡片 */
    // srtop.reveal('.work .box', { interval: 200 });

    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

showProjects();

// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}