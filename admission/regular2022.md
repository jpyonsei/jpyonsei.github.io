---
layout: sub
title: 🥇 정시 입시요강
---
<div style="margin:20px 0 50px 0">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist" style="border:none;">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">가군</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">나군</a>
            <!--
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">다군</a>
            -->
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <!-- 가군 -->
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <table class="table table-condensed">
                <tbody>
                    {% for p in site.data.admission2022.ka-group -%}
                        <tr>
                            <td><a data-toggle="modal" href="#admission" onclick="loadImage({{forloop.index}}, '{{p.image-url}}', '{{p.title}}')" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ p.title }}</a></td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
        <!-- 나군 -->
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <table class="table table-condensed">
                <tbody>
                    {% for n in site.data.admission2022.na-group -%}
                        <tr>
                            <td>
                                <a data-toggle="modal" href="#admission" onclick="loadImage({{forloop.index}}, '{{n.image-url}}', '{{n.title}}')" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=n.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ n.title }}</a>
                            </td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
        <!-- 다군 
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
        </div>
        -->
    </div>
</div>

<div class="portfolio-modal modal fade" id="admission" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" style="padding-bottom: 30px">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto" style="padding:0">
              <div class="modal-body" style="padding:0">
                <img class="img-fluid d-block mx-auto" id="admissionImg" alt="">
                <button class="btn btn-primary" data-dismiss="modal" type="button" style="text-align:right;">
                  <i class="fas fa-times" ></i>  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<script type="text/javascript">
$(document).ready(function () {
    $("#admission").on("hidden.bs.modal", function () {
        $("body").css("position", "relative");
    });
  
});

const loadImage = function(index, img_url, title) {
    $("body").css("position", "fixed");
    $("#admissionImg").attr("src", img_url);
    $("#admissionImg").attr("alt", title);
}
</script>