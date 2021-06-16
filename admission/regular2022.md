---
layout: sub
title: 정시
---
<div style="margin:20px 0 50px 0">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">가군</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">나군</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">다군</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <table class="table table-condensed">
                <tbody>
                    {% for p in site.data.admission2022.ka-group -%}
                        <tr>
                            <td><a data-toggle="modal" href="#admission{{forloop.index}}" onclick="loadImage({{forloop.index}}, '{{p.image-url}}')" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ p.title }}</a></td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
    </div>
</div>
{% include admission_modals.html %}
<script type="text/javascript">
const loadImage = function(index, img_url) {
    $("#admissionImg" + index).attr("src", img_url);
}
</script>