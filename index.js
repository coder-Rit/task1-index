const groups2 = [
  {
    grp: "Node 10/Node 9",
    sys: ["clean room monitoring"],
  },
  {
    grp: "Node 10/Node 7/Node 8",
    sys: ["PLC-1D-04J"],
  },
   
  {
    grp: "Node 10/Node 7/Node 5",
    sys: ["test", "OEE System"],
  },
   
];
const groups = [
  {
    grp: "Node 10/Node 9",
    sys: ["clean room monitoring"],
  },
  {
    grp: "Node 10/Node 7/Node 8",
    sys: ["PLC-1D-04J"],
  },
   
  {
    grp: "Node 10/Node 7/Node 5",
    sys: ["test", "OEE System"],
  },
  {
    grp: "Node 10/Node 7/Node 5",
    sys: ["test", "OEE System"],
  },
  {
    grp: "Node 10/Node 7/Node 5",
    sys: ["test", "OEE System"],
  },
   
  {
    grp: "Node 10/Node 7/Node 5",
    sys: ["test", "OEE System"],
  },
   
];

const notiList = [
  {
    Name: "Ritesh patil",
    discript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem!",
    timeStamp: Date.now() - 554000,
  },
  {
    Name: "Rushikesh K.",
    discript: "Lorem, ipsum dolor sit amet consectetur ",
    timeStamp: Date.now() - 5648613,
  },
  {
    Name: "Aarya Gundu",
    discript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quidem, adipisicing elit. Provident, quidem!",
    timeStamp: Date.now() - 66876455,
  },
  {
    Name: "Rohit Kadam",
    discript: "consectetur adipisicing elit. Provident, quidem!",
    timeStamp: Date.now() - 160064564,
  },
];
let list = "";
let list2 = "";
let isToggel = true;
let isMenuToggle = false;
let notElemiList = "";

//convert timestamp
const timeAgo = (timestamp) => {
  const now = new Date();
  const timestampDate = new Date(timestamp);
  const timeDifference = now - timestampDate;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return days + "d ago";
  } else if (hours > 0) {
    return hours + "h ago";
  } else if (minutes > 0) {
    return minutes + "m ago";
  } else {
    return seconds + "s ago";
  }
};

// aaray can be assigned based on number of groups
let toggleList = [true, true];
//toggling of dropdown
const toggel = (groupCount) => {
  let list = document.getElementById("list");

  // getting number of chileds
  const n_chileds = list.children.length;


  if (toggleList[groupCount - 1]) {
    console.log(n_chileds);
    list.style.height = "0px";
  } else {

    //dynamic heigth baced on number of carts
    if (window.innerWidth <= 1300) {

      if (window.innerWidth <= 750) {
        list.style.height = (170*(n_chileds))+"px";
        
      }else{
        list.style.height = (170*(Math.round(n_chileds/2)))+"px";
      }
    } else {
      list.style.height = (170*(Math.round(n_chileds/4)))+"px";

    }
  }
  toggleList[groupCount - 1] = !toggleList[groupCount - 1];
};

//toggling of menu
const toggelMenu = () => {
  if (isMenuToggle) {
    document.getElementById("menu").style.transform = "translateX(0px)";
    document.getElementById(
      "bars"
    ).innerHTML = `<i class="fa-solid fa-xmark fa-lg" onclick="toggelMenu()"></i>`;
  } else {
    document.getElementById("menu").style.transform = "translateX(-200px)";
    document.getElementById(
      "bars"
    ).innerHTML = `<i class="fa-solid fa-bars fa-lg" onclick="toggelMenu()"></i>`;
  }
  isMenuToggle = !isMenuToggle;
};

//opeing of notificatino
const openNotification = () => {
  document.getElementById("noti").style.transform = "translateX(0px)";
};

//closing of notificatino
const closeNotification = () => {
  document.getElementById("noti").style.transform = "translateX(450px)";
};

// creating html
groups.map((ele) => {
  const relations = ele.grp.split("/");
  ele.sys.map((node) => {
    const elementObj = `  <div class="nodeDiv">
      <span class="nodeTitle">${node}</span>
      <div class="relationDiv">
          <span>Parent </span>
          <span>${relations[relations.length - 1]}</span>
      </div>
      <div class="relationDiv">
          <span>Grand Parent </span>
          <span>${relations[relations.length - 2]}</span>
      </div>
      
      </div>  
      `;
    list = list + elementObj;
  });
});
groups2.map((ele) => {
  const relations = ele.grp.split("/");
  ele.sys.map((node) => {
    const elementObj = `  <div class="nodeDiv">
      <span class="nodeTitle">${node}</span>
      <div class="relationDiv">
          <span>Parent </span>
          <span>${relations[relations.length - 1]}</span>
      </div>
      <div class="relationDiv">
          <span>Grand Parent </span>
          <span>${relations[relations.length - 2]}</span>
      </div>
      
      </div>  
      `;
    list2 = list2 + elementObj;
  });
});


notiList.map((elme) => {
  notElemiList =
    notElemiList +
    ` <div class="notielm">
      <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${
        elme.Name
      }" alt="">
      <div>
          <span>${elme.Name}</span>
          <span>${elme.discript}</span>
          <span>${timeAgo(elme.timeStamp)}</span>
  
      </div>
  </div>`;
});

//inintialzers
toggelMenu();
toggel(1);
toggel(2);
//filling html elements
document.getElementById("list1").innerHTML = list;
document.getElementById("list2").innerHTML = list2;
document.getElementById("notiList").innerHTML = notElemiList;
