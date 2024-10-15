function Footer() {
 const todayDate = new Date();
  return (        
	   <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {todayDate.getFullYear()}.  Premium <a href="http://www.sportainmentdesign.com" target="_blank">Sportainment Engineering and Design LLP</a>. All rights reserved.</span>
          </div>
        </footer>
  );
}
export default Footer;