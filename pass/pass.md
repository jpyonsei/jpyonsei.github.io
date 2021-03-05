---
layout: sub
title: 합격자 명단
---
<br/>
<table class="table table-condensed">
    <thead class="thead-dark">
        <tr>
            <th>대학교</th>
            <th>학과명</th>
            <th>이름</th>
            <th>출신교</th>
        </tr>
    </thead>
    <tbody>
        {%- for p in site.data.pass.pass -%}
            <tr>
                {% if p.univ == "연세대학교" %}
                    {% assign logo = "yonsei_logo.png" %}
                {% elsif p.univ == "고려대학교" %}
                    {% assign logo = "korea_logo.png" %}
                {% elsif p.univ == "중앙대학교" %}
                    {% assign logo = "joongang_logo.png" %}
                {% elsif p.univ == "건국대학교" %}
                    {% assign logo = "kunkuk_logo.png" %}
                {% else %}
                    {% assign logo = "korea_logo.png" %}
                {% endif %}
                <td><img src="/assets/img/logo/{{logo}}" width="24px" height="24px" style="margin-right:3px"/>{{ p.univ }}</td>
                <td>{{ p.dept }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.high }}</td>
            </tr>
        {%- endfor -%}
    </tbody>

</table>