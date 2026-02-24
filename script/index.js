let interviewJob = [];
let rejectedJob = [];
let changeCountContainer = document.getElementById("change-count-container");
let chnageCount = document.getElementById("change-count");
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
    changeCountContainer.classList.add("hidden");
  }
  if (id == "interview-toggle-btn") {
    jobContainer.classList.add("hidden");
    rejectedSection.classList.add("hidden");
    interviewSection.classList.remove("hidden");
    changeCountContainer.classList.remove("hidden");
    // chnageCount.innerText = interviewJob.length;
    updateCount();
    renderInterview();
  }
  if (id == "rejected-toggle-btn") {
    interviewSection.classList.add("hidden");
    jobContainer.classList.add("hidden");
    rejectedSection.classList.remove("hidden");
    changeCountContainer.classList.remove("hidden");
    // chnageCount.innerText = rejectedJob.length;
    updateCount();
    renderRejected();
  }
}

// event delegation
mainContainer.addEventListener("click", function (e) {
  // conditon if interview-btn click
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
      typeEle.classList.remove("bg-red-500", "text-white");
      typeEle.classList.add("bg-green-400", "text-white");
    }
    rejectedJob = rejectedJob.filter(
      (jobs) => jobs.companyName !== newData.companyName,
    );
    updateCount();
    if (!interviewSection.classList.contains("hidden")) renderInterview();
    if (!rejectedSection.classList.contains("hidden")) renderRejected();
  }
  // condition if rejceted-btn click
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
      // updateCount();
      // e.target.disabled = true;
      // e.target.innerText = "ADDED";
      typeEle.innerText = "REJECTED";
      typeEle.classList.remove("bg-green-400", "text-white");
      typeEle.classList.add("bg-red-500", "text-white");
    }
    interviewJob = interviewJob.filter(
      (jobs) => jobs.companyName !== newData.companyName,
    );
    updateCount();
    if (!interviewSection.classList.contains("hidden")) renderInterview();
    if (!rejectedSection.classList.contains("hidden")) renderRejected();
  }
  // condition if trash btn clicked
  if (e.target.classList.contains("fa-trash-can")) {
  const card = e.target.closest(".job-card");
  const companyName = card.querySelector(".company-name").innerText;

  // remove from arrays
  interviewJob = interviewJob.filter(job => job.companyName !== companyName);
  rejectedJob = rejectedJob.filter(job => job.companyName !== companyName);

  if (!jobContainer.classList.contains("hidden")) {
    card.remove();
    updateTotalCount();
  }

  
  if (!interviewSection.classList.contains("hidden")) renderInterview();
  if (!rejectedSection.classList.contains("hidden")) renderRejected();

  updateCount();
}
});
function updateCount() {
  interviewCountEle.innerText = interviewJob.length;
  rejectedCountEle.innerText = rejectedJob.length;

  if (!interviewSection.classList.contains("hidden")) {
    chnageCount.innerText = interviewJob.length;
  }

  if (!rejectedSection.classList.contains("hidden")) {
    chnageCount.innerText = rejectedJob.length;
  }
}
function updateTotalCount() {
  for (let count of totalCountElement) {
    count.textContent = jobContainer.children.length;
  }
}

function renderInterview() {
  if (interviewJob.length == 0) {
    interviewSection.innerHTML = "";
    

    const nothingDiv = document.createElement("div");
    nothingDiv.innerHTML = `

     <section class="max-w-7xl my-10 mx-auto bg-green-300 text-center">
        <div class="mx-auto bg-base-100 py-5 px-3 ">
            <img class="mx-auto" src="assest/jobs.png" alt="">
            <h2 class="company-name text-[#002C5C] font-semibold text-2xl">No jobs available</h2>
            <p class="text-[#323B49] text-xl">Check back soon for new job opportunities</p>
        </div>

    </section>

     `;
    interviewSection.appendChild(nothingDiv);
    updateCount();
  } else {
    interviewSection.innerHTML = "";
    for (let job of interviewJob) {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
     <div class="job-card flex justify-between bg-base-100 shadow p-4">
            <div class="space-y-4">
                <div>
                    <h2 class="company-name text-[#002C5C] font-semibold text-lg">${job.companyName}</h2>
                    <p class="job-role text-[#64748B] font-semibold  text-lg">${job.jobRole}</p>

                </div>
                <div>
                    <p class="salary font text-[#64748B]">${job.salary}</p>
                </div>
                <div class="space-y-2">
                    <button class="type text-[#002C5C] btn btn-soft">${job.type}</button>
                    <p class="description text-[#323B49]">${job.description}</p>
                </div>
                <div>
                    <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                    <button class=" rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-trash-can cursor-pointer"></i>
            </div>



        </div>
    
    
        `;
      interviewSection.appendChild(newDiv);
    }
  }
}
function renderRejected() {
  if (rejectedJob.length == 0) {
    rejectedSection.innerHTML = "";
    const rejectDiv = document.createElement("div");
    rejectDiv.innerHTML = `
      <section class="max-w-7xl my-10 mx-auto bg-green-300 text-center">
        <div class="mx-auto bg-base-100  py-5 px-3">
            <img class="mx-auto" src="assest/jobs.png" alt="">
            <h2 class="company-name text-2xl text-[#002C5C] font-semibold ">No jobs available</h2>
            <p class="text-[#323B49] text-xl">Check back soon for new job opportunities</p>
        </div>

    </section>
     `;
    rejectedSection.appendChild(rejectDiv);
    updateCount();
  } else {
    rejectedSection.innerHTML = "";
    for (let rejected of rejectedJob) {
      
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <div class="job-card flex justify-between bg-base-100 shadow p-4">
            <div class="space-y-4">
                <div>
                    <h2 class="company-name text-[#002C5C] font-semibold text-lg">${rejected.companyName}</h2>
                    <p class="job-role text-[#64748B] font-semibold  text-lg">${rejected.jobRole}</p>

                </div>
                <div>
                    <p class="salary font text-[#64748B]">${rejected.salary}</p>
                </div>
                <div class="space-y-2">
                    <button class="type text-[#002C5C] btn btn-soft">${rejected.type}</button>
                    <p class="description text-[#323B49]">${rejected.description}</p>
                </div>
                <div>
                    <button class=" interview-btn btn btn-outline btn-success">INTERVIEW</button>
                    <button class=" rejected-btn btn btn-outline btn-error">REJECTED</button>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-trash-can cursor-pointer"></i>
            </div>



        </div>
    
    
        
      `;
      rejectedSection.appendChild(newDiv);
    }
  }
}
