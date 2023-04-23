const posts = document.getElementById('posts');


fetch('/api/v1/posts')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.data.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="bg-white border-gray mt-4">
      <div class="d-flex pt-2">
          <div class="col d-flex">
              <img class="post-profile rounded-circle " src="img/hero.jpeg">
              <div class="d-flex flex-column">
                  <span class="fw-bold fs-6">${post.username}</span>
                  <span class="text-gray-darker fs-6">Job title and position</span>
              </div>
          </div>
          <div class="p-2 text-gray-darker">
              <button class="btn rounded-circle hover-dark p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                      width="24px" fill="currentColor">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
              </button>
          </div>
      </div>
      <div class="post-body pt-2 ps-3">
          <div class="post-title fw-bold">
              <a class="text-decoration-none text-black" href="#">
                  We put the title of posts here
              </a>
          </div>
          <div class="post-text pt-1">
              ${post.content}
          </div>
      </div>
      <div class="post-image pt-2">
          <img class="img-fluid" src="img/post_image.jpg">
      </div>
      <div class="post-footer p-2">
          <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button"
                  class="left-button post-button bg-second-color border-0 text-black p-1">
                  <img src="img/up.png" width="20" class="ms-2">
                  15
              </button>
              <button type="button"
                  class="right-button post-button bg-second-color border-0 text-black p-1">
                  <img src="img/down.png" width="20" class="me-2">
  
              </button>
          </div>
          <button type="button"
              class="post-button post-button-bg border-0 rounded-circle text-black p-1">
              <img src="img/refresh.png" width="20" class="">
              1
          </button>
          <button type="button"
              class="post-button post-button-bg border-0 rounded-circle text-black p-1">
              <img src="img/comment.png" width="25" class="p-1">
              123
          </button>
      </div>
  </div>
      `;
      posts.appendChild(div);
    }); // append data to the DOM
  })
  .catch((err) => {
    console.log(err);
  }
);
