        tampilstokberas();
        tampilstokgiling();
        tampilpolesrecycle();
        tampilpolesberas();

        function tampilstokberas(){
          $.ajax({
            type  : 'ajax',
            url   : '<?php echo base_url() ?>index.php/stok/get_all_stokberas',
            async : false,
            dataType : 'json',
            success : function(data){
              var html = '';
              var i;
              var x =1;
              for (i=0  ; i<data.length; i++) {
                html += "<tr>"+
                        "<td>"+x+"</td>"+
                        "<td>"+data[i].no_penerimaan+"</td>"+
                        "<td>"+data[i].jenis+"</td>"+
                        "<td>"+data[i].supplier+"</td>"+
                        "<td>"+data[i].tanggal+"</td>"+
                        "<td>"+data[i].berat+"</td>"+
                        "<td>"+data[i].stok+"</td>"+
                        "</tr>";
                      x++;
              }
              $('#example1 tbody').html(html);
              $('#example1').DataTable();
            }
          });
        }

        function tampilstokgiling(){
          $.ajax({
            type  : 'ajax',
            url   : '<?php echo base_url() ?>index.php/stok/get_all_stokgiling',
            async : false,
            dataType : 'json',
            success : function(data){
              var html = '';
              var i;
              var x =1;
              for (i=0  ; i<data.length; i++) {
                html += "<tr>"+
                        "<td>"+x+"</td>"+
                        "<td>"+data[i].no_penggilingan+"</td>"+
                        "<td>"+data[i].jenis+"</td>"+
                        "<td>"+"Hasil Giling "+data[i].tipe+"</td>"+
                        "<td>"+data[i].tanggal+"</td>"+
                        "<td>"+data[i].qty_finish+"</td>"+
                        "<td>"+data[i].stok+"</td>"+
                        "</tr>";
                      x++;
              }
              $('#example3 tbody').html(html);
              $('#example3').DataTable();
            }
          });
        }   

        function tampilpolesrecycle(){
          $.ajax({
            type  : 'ajax',
            url   : '<?php echo base_url() ?>index.php/stok/get_all_polesrecycle',
            async : false,
            dataType : 'json',
            success : function(data){
              var html = '';
              var i;
              var x =1;
              for (i=0  ; i<data.length; i++) {
                html += "<tr>"+
                        "<td>"+x+"</td>"+
                        "<td>"+data[i].no_poles+"</td>"+
                        "<td>"+data[i].jenis+"</td>"+
                        "<td>"+data[i].tanggal+"</td>"+
                        "<td>"+data[i].tonage_akhir+"</td>"+
                        "<td>"+data[i].stok+"</td>"+
                        "</tr>";
                      x++;
              }
              $('#example4 tbody').html(html);
              $('#example4').DataTable();
            }
          });
        }   

        function tampilpolesberas(){
          $.ajax({
            type  : 'ajax',
            url   : '<?php echo base_url() ?>index.php/stok/get_all_polesberas',
            async : false,
            dataType : 'json',
            success : function(data){
              var html = '';
              var i;
              var x =1;
              for (i=0  ; i<data.length; i++) {
                html += "<tr>"+
                        "<td>"+x+"</td>"+
                        "<td>"+data[i].no_poles+"</td>"+
                        "<td>"+data[i].jenis+"</td>"+
                        "<td>"+data[i].tanggal+"</td>"+
                        "<td>"+data[i].tonage_akhir+"</td>"+
                        "<td>"+data[i].stok+"</td>"+
                        "</tr>";
                      x++;
              }
              $('#example5 tbody').html(html);
              $('#example5').DataTable();
            }
          });
        }