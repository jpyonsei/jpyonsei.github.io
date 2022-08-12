---
layout: sub
title: 🥇 2023학년도 정시 입시요강
---
<div style="margin:20px 0 50px 0">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist" style="border:none;">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true" style="color:black">가군</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" style="color:black">나군</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" style="color:black">다군</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <!-- 가군 -->
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <table class="table table-condensed">
                <tbody>
                    {% for p in site.data.admission-regular-2023.ka-group -%}
                        <tr>
                            <td><a href="{{p.link-url}}" target="_blank" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ p.major }}</a></td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
        <!-- 나군 -->
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <table class="table table-condensed">
                <tbody>
                    {% for p in site.data.admission-regular-2023.na-group -%}
                        <tr>
                            <td><a href="{{p.link-url}}" target="_blank" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ p.major }}</a></td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
        <!-- 다군 -->
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <table class="table table-condensed">
                <tbody>
                    {% for p in site.data.admission-regular-2023.da-group -%}
                        <tr>
                            <td><a href="{{p.link-url}}" target="_blank" style="text-decoration:none;color:black"><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:8px"/>{{ p.major }}</a></td>
                        </tr>
                    {%- endfor -%}
                </tbody>
            </table>
        </div>
    </div>
</div>