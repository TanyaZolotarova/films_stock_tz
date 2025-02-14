<script>
export default {
  name: "FooterComponent",
};
</script>

<template>
  <footer class="footer">
    <div class="footer-links">
      <div>
        <a href="#">Audio Description</a>
        <a href="#">Investor Relations</a>
        <a href="#">Legal Notices</a>
      </div>
      <div>
        <a href="#">Help Center</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
      </div>
      <div>
        <a href="#">Gift Cards</a>
        <a href="#">Terms of Use</a>
        <a href="#">Corporate Information</a>
      </div>
      <div>
        <a href="#">Media Center</a>
        <a href="#">Privacy</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.footer {
  padding: 20px;
  text-align: left;
}
.footer-links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-links div {
  display: flex;
  flex-direction: column;
}
.footer-links a {
  color: #aaa;
  text-decoration: none;
  font-size: 14px;
  margin: 5px 0;
}
.footer-links a:hover {
  color: #fff;
}
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
