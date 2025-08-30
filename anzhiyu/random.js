var posts=["p/70159603.html","p/d516c1d6.html","p/5b4d8163.html","p/635901b3.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };