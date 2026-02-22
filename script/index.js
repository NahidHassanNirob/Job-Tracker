let interviewJob = [];
let rejectedJob = [];
let changeCountContainer=document.getElementById("change-count-container")
let chnageCount=document.getElementById("change-count")
const interviewCountEle = document.getElementById("interview-count");
interviewCountEle.innerText = interviewJob.length;
const rejectedCountEle = document.getElementById("rejected-count");
rejectedCountEle.innerText = rejectedJob.length;
let jobContainer = document.getElementById("job-container");
const totalCountElement = document.getElementsByClassName("total-count");
const mainContainer = document.querySelector("main");
const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");
// total count
for (let count of totalCountElement) {
  count.textContent = jobContainer.children.length;
}

// button toggol style
function btnToggol(id) {
  const allBtn = document.getElementById("all-toggle-btn");
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  const interview = document.getElementById("interview-toggle-btn");
  interview.classList.remove("bg-[#3B82F6]", "text-white");
  const reject = document.getElementById("rejected-toggle-btn");
  reject.classList.remove("bg-[#3B82F6]", "text-white");
  const select = document.getElementById(id);
  select.classList.add("bg-[#3B82F6]", "text-white");
  if (id == "all-toggle-btn") {
    interviewSection.classList.add("hidden");
    rejectedSection.classList.add("hidden");
    jobContainer.classList.remove("hidden");
    changeCountContainer.classList.add("hidden")
  }
  if (id == "interview-toggle-btn") {
    jobContainer.classList.add("hidden");
    rejectedSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    changeCountContainer.classList.remove("hidden")
    chnageCount.innerText=interviewJob.length

  }
  if (id == "rejected-toggle-btn") {
    interviewSection.classList.add("hidden");
    jobContainer.classList.add("hidden");
    rejectedSection.classList.remove("hidden");
    changeCountContainer.classList.remove("hidden")
    chnageCount.innerText=rejectedJob.length
  }
}

// event delegation
jobContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const typeEle = parentNode.querySelector(".type");
    const type = typeEle.innerText;
    const description = parentNode.querySelector(".description").innerText;
    // console.log(companyName,jobRole,salary,type,description);

    const newData = {
      companyName,
      jobRole,
      salary,
      type: "INTERVIEW",
      description,
    };

    const existed = interviewJob.find(
      (item) => item.companyName == newData.companyName,
    );

    if (!existed) {
      interviewJob.push(newData);
      updateCount();
      // e.target.disabled = true;
      // e.target.innerText = "ADDED";
      typeEle.innerText = "INTERVIEW";
      typeEle.classList.remove("bg-red-500","text-white")
      typeEle.classList.add("bg-green-400","text-white")
    }
    rejectedJob=rejectedJob.filter(jobs=>jobs.companyName!==newData.companyName);
    updateCount();
    
  }
  if (e.target.classList.contains("rejected-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const typeEle = parentNode.querySelector(".type");
    const type = typeEle.innerText;
    const description = parentNode.querySelector(".description").innerText;

    const newData = {
      companyName,
      jobRole,
      salary,
      type: "REJECTED",
      description,
    };

    const existed = rejectedJob.find(
      (item) => item.companyName == newData.companyName,
    );
    // console.log(interviewJob);
    if (!existed) {
      console.log("not existed");
      rejectedJob.push(newData);
      // console.log(interviewJob);
      updateCount();
      // e.target.disabled = true;
      // e.target.innerText = "ADDED";
      typeEle.innerText = "REJECTED";
      typeEle.classList.remove("bg-green-400","text-white")
      typeEle.classList.add("bg-red-500","text-white")
      
    }
    interviewJob=interviewJob.filter(jobs=>jobs.companyName!==newData.companyName);
    updateCount()
  }
});
function updateCount() {
  interviewCountEle.innerText = interviewJob.length;
  rejectedCountEle.innerText = rejectedJob.length;
  
}

function render() {}
