---
layout: sub
title: 🎉 합격 스토리
---

<div class="container">
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom:25px">
            <a class="nav-item nav-link active" id="nav-2022-tab" data-toggle="tab" href="#nav-2022" role="tab" aria-controls="nav-home" aria-selected="true" style="color:black">2022학년도</a>
            <a class="nav-item nav-link" id="nav-2022-tab" data-toggle="tab" href="#nav-2021" role="tab" aria-controls="nav-profile" aria-selected="false" style="color:black">2021학년도</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <!-- 가군 -->
        <div class="tab-pane fade show active" id="nav-2022" role="tabpanel" aria-labelledby="nav-2022-tab">
            <div class="row no-gutter success-story-main " >
                {% for success in site.portfolio%}
                    {% if success.year == 2022 %}
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel">
                            <a data-toggle="modal" href="#p{{ forloop.index }}">
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
                        {% assign success_story_index = success_story_index | plus: 1 %}
                        {% for banner in site.data.success_story.banner.list%}
                            {% if success_story_index == banner.index %}
                                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel ">
                                    <div class="banner-panel" style="background-color:#{{ banner.bgcolor }}">
                                        <img src="{{ banner.img }}"/>
                                        <div class="banner-content align-middle" style="background-image:url(/assets/img/logo/{% include logo_func.html univ=banner.univ %})">    
                                        </div>
                                    </div>
                                </div>
                            {% endif %}
                        {% endfor %}
                    {% endif %}
                {% endfor %}
                {% assign success_story_index = 0 %}
            </div>
        </div>
        <div class="tab-pane fade" id="nav-2021" role="tabpanel" aria-labelledby="nav-2021-tab">
            <div class="row no-gutter success-story-main " >
                {% for success in site.portfolio%}
                    {% if success.year == 2021 %}
                        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel">
                            <a data-toggle="modal" href="#p{{ forloop.index }}">
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
                        {% assign success_story_index = success_story_index | plus: 1 %}
                        {% for banner in site.data.success_story.banner.list%}
                            {% if success_story_index == banner.index %}
                                <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-12 panel ">
                                    <div class="banner-panel" style="background-color:#{{ banner.bgcolor }}">
                                        <img src="{{ banner.img }}"/>
                                        <div class="banner-content align-middle" style="background-image:url(/assets/img/logo/{% include logo_func.html univ=banner.univ %})">    
                                        </div>
                                    </div>
                                </div>
                            {% endif %}
                        {% endfor %}
                    {% endif %}
                {% endfor %}
            </div>
        </div>
</div>
{% include modals.html %}