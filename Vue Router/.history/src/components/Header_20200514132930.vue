<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav nav nav-pills">
   
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a> <span class="sr-only">(current)</span></router-link>
        <router-link to="/user/11" tag="li" active-class="active"><a>User 1</a></router-link>
                <router-link to="/user/12" tag="li" active-class="active"><a>User 2</a></router-link>
            <router-link to="/umake" tag="li" active-class="active"><a>Make Believe</a></router-link>
                        <router-link to="/another" tag="li" active-class="active"><a>Another Onew</a></router-link>
    </ul>
  </div>
</nav>
</template>