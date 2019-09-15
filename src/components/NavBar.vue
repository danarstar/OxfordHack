<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="primary">
    <b-navbar-brand href="#">OMAS</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/finance">Finance Team</b-nav-item>
        <b-nav-item to="/archtect">Archtect Team</b-nav-item>
        <b-nav-item to="/purchase">Purchase Team</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {}
</script>
