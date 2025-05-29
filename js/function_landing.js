function checkmanyDomain(id) {
    if (id == 0) {
       var txt1 = jQuery("#domainNameSingleInput").val();
       txt1 = $.trim(txt1);
       var array_domain = txt1.split('\n');
       var total_domain = array_domain.length;
       if (txt1 == "") {
          alert("Nhập tên miền cần kiểm tra", "TENTEN.VN");
          return;
       }
       if (total_domain > 29) {
          alert("Bạn chỉ kiểm tra tối đa 30 tên miền 1 lúc ", "TENTEN.VN");
          return;
       }
       jQuery("#submit-bulk-domain").submit();
    } else {
       var txt1 = jQuery("#domainNameSingleInput1").val();
       txt1 = $.trim(txt1);
       var array_domain = txt1.split('\n');
       var total_domain = array_domain.length;
       if (txt1 == "") {
          alert("Nhập tên miền cần kiểm tra ", "TENTEN.VN");
          return;
       }
       if (total_domain > 29) {
          alert("Bạn chỉ kiểm tra tối đa 30 tên miền 1 lúc ", "TENTEN.VN");
          return;
       }
       jQuery("#submit-bulk-domains").submit();
    }
 }