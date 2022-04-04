let blogs = []; //nampung data

function addBlog(event) {
  event.preventDefault();  // tidak ke reload jika di post blog



  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;

  let startdate = document.getElementById("startdate").value;
  let stopdate = document.getElementById("stopdate").value;

  let image = document.getElementById("input-blog-image");
  image = URL.createObjectURL(image.files[0]);

  let ceklis = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);

  let blog = {
    author: `Teguh`,
    title,
    startdate,
    stopdate,
    content,
    image,
    ceklis,
  };

  blogs.push(blog); 
  renderBlog(); //menambahkan data dari line 1
}

function renderBlog() {

  lengthData = blogs.length;
  let blogContainer = document.getElementById("contents");
  blogContainer.innerHTML = firstBlogContent();

  let i = 0;
  for (i; i < lengthData; i++) {
    let icons = blogs[i].ceklis.map(value => `<img src="assets/${value}">`)

    blogContainer.innerHTML += `
        <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <h4>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h4>
          <div class="detail-blog-content">
            Duration : ${durationTime(blogs[i].startdate, blogs[i].stopdate)}
          </div>
          <p>${blogs[i].content}</p>
          
          <div class="logo">
          <div class="nodesj">
          `+ icons + `
          </div>
          </div>

          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
        `;

  }


  // Non Looping 2x
  function firstBlogContent() {
    return `<div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <h4>
        <a href="blog-detail.html" target="_blank">Fullstack Development</a>
      </h4>
      <div class="detail-blog-content">
        Durasi : 3 Bulan
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam minima in culpa itaque deleniti unde
        quae aperiam ex architecto, blanditiis eveniet.
      </p>

      <div class="logo">
        <div class="nodejs">
          <img src="assets/node-js.png" alt="ns" id="nss">
        </div>
        <div class="reactjs">
          <img src="assets/reactjs.png" alt="rs" id="rss">
        </div>
        <div class="javascript">
          <img src="assets/js.png" alt="js" id="jss">
        </div>
        <div class="typescript">
          <img src="assets/typescript.png" alt="ts" id="tss">
        </div>
      </div>
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
    </div>
  </div>`;
  }
}

function durationTime(startdate, stopdate) {
  // Convert Start - End Date to Days
  let newStartDate = new Date(startdate)
  let newEndDate = new Date(stopdate)
  let duration = Math.abs(newStartDate - newEndDate)

  let day = Math.floor(duration / (1000 * 60 * 60 * 24))

  if (day < 30) {
    return day + ` days `
  } else {
    let diffMonths = Math.ceil(duration / (1000 * 60 * 60 * 24 * 30));
    if (diffMonths >= 1) {
      return diffMonths + ` month `
    }

  }
};
