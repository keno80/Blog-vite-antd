<template>
  <div class="footer">
    <div class="footer-content">本博客由 Node.Js + Vite + Ant Design 驱动</div>
    <div class="footer-content">欢迎你的到来</div>
  </div>
</template>

<script>
export default {
  name: "BFooter"
}
</script>

<style scoped lang="scss">
.footer {
  background-color: rgb(241, 246, 255);
  font-family: PF-Medium, sans-serif;
  font-size: 14px;
  color: #b3b3b3;
  padding: 10px 0;
  text-align: center;

  .footer-content {
    max-width: 1100PX;
    margin: 0 auto;
  }
}
</style>