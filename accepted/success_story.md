---
layout: sub
title: 합격 스토리🎉
---

<div class="container">
    <div class="row no-gutter success-story-main " >
        {% for success in site.portfolio%}
            {% assign success_story_index = forloop.index %}
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel">
                <a data-toggle="modal" href="#p{{ success_story_index }}">
                    <div class="pic-panel" style="background-image:url({{ success.picture }})">
                    </div>
                    <div class="desc-panel">
                        <p class="univ">
                            <span><img src="/assets/img/logo/{% include logo_func.html univ=success.univ %}"/>{{ success.univ }}</span>
                        </p>
                        <p class="dept">{{ success.dept }}</p>
                        <p class="name">{{ success.name }} ({{ success.highschool }})</p>
                    </div>
                </a>
            </div>
            {% for banner in site.data.success_story.banner.list%}
                {% if success_story_index  == banner.index %}
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel ">
                        <div class="banner-panel" style="background-color:#{{ banner.bgcolor }}">
                            <img src="{{ banner.img }}"/>
                            <div class="banner-content align-middle" style="background-image:url(/assets/img/logo/{% include logo_func.html univ=banner.univ %})">    
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}
        {% endfor %}
    </div>
</div>
{% include modals.html %}