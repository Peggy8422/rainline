// import './style.css'
import "./styles/common-layout.scss";
import "./styles/homepage.scss";
import "./styles/use.scss";
import "./styles/rainline-rainpit.scss";
import "./styles/areas.scss";
import "./styles/performance.scss";
import "./styles/downloads.scss";

// Vue data & cocmpomnents
const companyBasicInfo = {
  address: "112063 台北市北投區清江路247巷8號1樓",
  tel_number: "02-2898-6207",
  fax_number: "02-2898-6132",
  email: "RL@rainline.com.tw",
  message: "專營截水溝",
};

const vm = Vue.createApp({});
vm.component("my-footer", {
  data() {
    return companyBasicInfo;
  },
  template: `
    <footer id="footer_block">
      <div class="social_media_links d-flex">
          <div class="link_box d-inline-block line"><img src="/images/icon/line.svg" alt="line" /></div>
          <a class="link_box d-inline-block yt" href=""><img src="/images/icon/youtube.svg" alt="yoututbe" /></a>
          <a class="link_box d-inline-block fb" href=""><img src="/images/icon/facebook.svg" alt="facebook" /></a>
      </div>
      <div class="container"> 
        <div class="row company_footinfo pb-0">
          <div class="col-sm-12"> 
            <img class="company_logo" src="/images/icon/footer_company_logo.svg" alt="正在旺企業有限公司" />
            <p class="intro_in_block_small">辦公室地址：{{ address }}</p>
            <p class="intro_in_block_small">電話：{{ tel_number }} 傳真：{{ fax_number }}</p>
            <p class="intro_in_block_small">信箱：{{ email }}</p>
          </div>
        </div>
      </div>
      <div class="companydeco_box">
        <div class="row">
          <div class="col-sm-12">
            <div class="logo_box d-flex flex-wrap">
              <div class="lab_logo_box"> 
                <img src="/images/footer_labicon/UL.png" alt="UL檢測" class="lab_logo">
              </div>
              <div class="lab_logo_box"> 
                <img src="/images/footer_labicon/TAF.png" alt="TAF檢測" class="lab_logo">
              </div>
              <div class="lab_logo_box zt"> 
                <img src="/images/footer_labicon/ZT.jpg" alt="日鼎檢測" class="lab_logo">
              </div>
              <div class="lab_logo_box"> 
                <img src="/images/footer_labicon/TTT.png" alt="鴻儀科技" class="lab_logo">
              </div>
              <div class="lab_logo_box"> 
                <img src="/images/footer_labicon/SGS.jpg" alt="SGS檢測" class="lab_logo">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container"> 
        <div class="row company_footinfo">
          <div class="col-sm-12">
            <p class="intro_in_block_small">台灣工廠生產，品質保證，安心合作，價格實惠，質量保證</p>
            <p class="intro_in_block_small">提供客戶設計專屬LOGO，專屬顏色射出</p>
          </div> 
        </div>
      </div>
    </footer>
      
  `,
});

vm.component("my-header", {
  data() {
    return companyBasicInfo;
  },
  template: `
    <nav id="nav_block" class="navbar navbar-expand-md fixed-top top_1">
      <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
          <img
            class="d-inline-block align-text-top"
            src="/images/icon/products_brandicon.svg"
            alt="Rain LINE PP截水溝"
          />
          <div class="brand d-inline-block align-text-top">
            <div class="rainline">Rain LINE PP截水溝</div>
            <div class="company_name d-flex">
              <img
                class="company_logo"
                src="/images/icon/Vigor_Bonanza_logo(img).webp"
                alt="正在旺企業有限公司"
              />
              <img
                class="company_name_logo"
                src="/images/icon/Vigor_Bonanza_standard.webp"
                alt="正在旺企業有限公司"
              />
            </div>
          </div>
        </a>
        <button
          class="navbar-toggler nav_hide border-0 bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
          aria-controls="mainmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon m-0"></span>
        </button>
        <div
          class="d-none d-md-flex align-items-center ms-auto"
          id="company-info"
        >
          <img
            class="company_logo_outline"
            src="/images/icon/Vigor_Bonanza_logo(line).webp"
            alt="正在旺企業有限公司"
          />
          <div class="company_headinfo">
            <div class="addr">地址：{{ address }}</div>
            <div class="tel_fax">
              電話：{{ tel_number }} / 傳真：{{ fax_number }}
            </div>
            <div class="email">E-mail：{{ email }}</div>
          </div>
        </div>
      </div>
    </nav>
    <header id="rainline_navlinks">
      <nav class="navbar navbar-expand-md fixed-top z-3">
        <div class="collapse navbar-collapse" id="mainmenu">
          <ul class="nav ms-auto mb-0 pt-1">
            <li class="nav-item">
              <div class="nav-link" id="all_products">產品資訊</div>
            </li>
            <li class="nav-item">
              <div class="nav-link" id="apply_areas">應用領域</div>
            </li>
            <li class="nav-item"><a class="nav-link" href="/use.html">使用方式</a></li>
            <li class="nav-item"><a class="nav-link" href="/performance.html">實績案例</a></li>
            <li class="nav-item">
              <a class="nav-link" href="/downloads.html">型錄資源與下載</a>
            </li>
          </ul>
          <div class="d-md-none company_headinfo in_menu p-3 py-2">
            <div class="addr">地址：{{ address }}</div>
            <div class="tel_fax">
              電話：{{ tel_number }} / 傳真：{{ fax_number }}
            </div>
            <div class="email">E-mail：{{ email }}</div>
          </div>
        </div>
      </nav>
    </header>
    <div id="all_products_menu">
      <button class="close_btn"><i class="bi bi-x-lg"></i></button>
      <div class="menu_wrapper">
        <div class="row">
          <div class="col-12 col-md-4 r_line_deco">
            <h5 class="products_menu_title">Rain Line PP截水溝</h5>
            <div class="rl_intro mb-3">
              PP截水溝是一種輕質的U型排水溝，也是一種免拆模的U溝，使用這項產品可以減少使用鋼筋數量及板模工，輕型的水溝蓋讓各年齡層在維護時不至於費力，高強度的溝蓋抗壓也適用於車行空間，縫隙式的溝蓋配件用於人行通道，百貨商場也美觀大方。
            </div>
          </div>
          <div class="col-12 col-md-4 r_line_deco">
            <h5 class="products_menu_title">Rain Line PP截水溝</h5>
            <div class="products_menu_cocntent d-flex flex-wrap">
              <div>
                <a class="rl_item_link" href="/rainline/rl100.html">RL 100</a>
                <ul class="rl_list">
                  <li class="rl_item">．RL-1005</li>
                  <li class="rl_item">．RL-1010</li>
                  <li class="rl_item">．RL-1010(L)</li>
                  <li class="rl_item">．RL-1015</li>
                  <li class="rl_item">．RL-1020</li>
                </ul>
              </div>
              <div>
                <a class="rl_item_link" href="/rainline/rl150.html">RL 150</a>
                <ul class="rl_list">
                  <li class="rl_item">．RL-1515</li>
                </ul>
              </div>
              <div>
                <a class="rl_item_link" href="/rainline/rl-other.html">相關配件</a>
                <ul class="rl_list">
                  <li class="rl_item">．萬向轉接頭</li>
                  <li class="rl_item">．線性陰井</li>
                  <li class="rl_item">．封底蓋</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="products_menu_title">Rain Pit 集水陰井</h5>
            <div class="products_menu_cocntent d-flex flex-wrap">
              <div>
                <a class="rl_item_link" href="/rainpit/rp2535h.html">小型陰井</a>
                <ul class="rl_list">
                  <li class="rl_item">．RP-25</li>
                  <li class="rl_item">．RP-30</li>
                  <li class="rl_item">．RP-35</li>
                  <li class="rl_item">．RP-35h</li>
                </ul>
              </div>
              <div>
                <a class="rl_item_link" href="/rainpit/rp4671.html">中大型陰井</a>
                <ul class="rl_list">
                  <li class="rl_item">．RP-46</li>
                  <li class="rl_item">．RP-56</li>
                  <li class="rl_item">．RP-71</li>
                </ul>
              </div>
              <div>
                <a class="rl_item_link" href="/rainpit/rp-other.html">相關配件</a>
                <ul class="rl_list">
                  <li class="rl_item">．加高器</li>
                  <li class="rl_item">．攔葉器</li>
                  <li class="rl_item">．陰井蓋</li>
                </ul>
              </div>
              <div>
                <a class="rl_item_link" href="/rainpit/drainage.html">落水頭</a>
                <ul class="rl_list">
                  <li class="rl_item">．平頭落水頭</li>
                  <li class="rl_item">．高腳落水頭</li>
                  <li class="rl_item">．高平落水頭</li>
                  <li class="rl_item">．落水頭腳座</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="apply_areas_menu">
      <button class="close_btn"><i class="bi bi-x-lg"></i></button>
      <div class="menu_wrapper">
        <h5 class="areas_menu_title">應用領域</h5>
        <div class="row">
          <div class="col-12 col-md-4">
            <a class="area_item_link" href="/surface.html">明溝排水</a>
            <div class="d-flex">
              <ul class="area_list">
                <li class="area_item">．人行通道</li>
                <li class="area_item">．風雨球場</li>
                <li class="area_item">．社區車道</li>
              </ul>
              <ul class="area_list">
                <li class="area_item">．社區邊溝</li>
                <li class="area_item">．海港碼頭</li>
                <li class="area_item">．公園綠地</li>
              </ul>
              <ul class="area_list">
                <li class="area_item">．後巷排水</li>
                <li class="area_item">．徒步通道</li>
                <li class="area_item">．邊坡排水</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <a class="area_item_link" href="/blind.html">暗溝排水</a>
            <div class="d-flex">
              <ul class="area_list">
                <li class="area_item">．戶外球場</li>
                <li class="area_item">．臨路農地</li>
                <li class="area_item">．社區暗溝</li>
              </ul>
              <ul class="area_list">
                <li class="area_item">．學校操場</li>
                <li class="area_item">．通學步道</li>
                <li class="area_item">．公園綠地</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <a class="area_item_link" href="/roof.html">屋頂與樓板</a>
            <div class="d-flex">
              <ul class="area_list">
                <li class="area_item">．學校屋頂</li>
                <li class="area_item">．海邊屋頂</li>
                <li class="area_item">．商辦大樓</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

vm.mount("#app");

// controls
//導覽列-產品資訊/應用領域下拉式選單toggle
const productInfoBtn = document.querySelector("#all_products");
const productInfoMenu = document.querySelector("#all_products_menu");
const productInfoCloseBtn = document.querySelector(
  "#all_products_menu .close_btn"
);

const areaInfoBtn = document.querySelector("#apply_areas");
const areaInfoMenu = document.querySelector("#apply_areas_menu");
const areaInfoCloseBtn = document.querySelector("#apply_areas_menu .close_btn");

window.addEventListener("click", (e) => {
  if (e.target === productInfoBtn) {
    productInfoMenu.classList.toggle("toggle");
  } else if (productInfoMenu.contains(e.target)) {
    if (productInfoCloseBtn.contains(e.target)) {
      productInfoMenu.classList.remove("toggle");
    } else return;
  } else {
    productInfoMenu.classList.remove("toggle");
  }

  if (e.target === areaInfoBtn) {
    areaInfoMenu.classList.toggle("toggle");
  } else if (areaInfoMenu.contains(e.target)) {
    if (areaInfoCloseBtn.contains(e.target)) {
      areaInfoMenu.classList.remove("toggle");
    } else return;
  } else {
    areaInfoMenu.classList.remove("toggle");
  }
});

// UX functions
function loadSketchfab(wrapperID,sflink){
  var oldAnchor = document.querySelector(wrapperID + ' button');
  if (oldAnchor){
    oldAnchor.remove();
  }

  var sketchfab_container = document.querySelector(wrapperID);
  sketchfab_container.innerHTML = '<iframe width="100%" height="500px" title="PP截水溝" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/' + sflink + '/embed?camera=0"> </iframe>';

}