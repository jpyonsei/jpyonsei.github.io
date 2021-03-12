---
layout: sub
title: 합격자 명단
---

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
                {% elsif p.univ == "카톨릭관동대학교" %}
                    {% assign logo = "cku.png" %}
                {% elsif p.univ == "가천대학교" %}
                    {% assign logo = "gachon.png" %}
                {% elsif p.univ == "강남대학교" %}
                    {% assign logo = "kangnam.png" %}
                {% elsif p.univ == "국립강원대학교" %}
                    {% assign logo = "kangwon.png" %}
                {% elsif p.univ == "한서대학교" %}
                    {% assign logo = "hanseo.png" %}
                {% elsif p.univ == "육군사관학교" %}
                    {% assign logo = "military.png" %}
                {% elsif p.univ == "상명대학교" %}
                    {% assign logo = "smu.png" %}
                {% elsif p.univ == "세종대학교" %}
                    {% assign logo = "sejong.png" %}
                {% elsif p.univ == "서울여자대학교" %}
                    {% assign logo = "seoul_women.png" %}
                {% elsif p.univ == "용인대학교" %}
                    {% assign logo = "yongin.png" %}
                {% elsif p.univ == "국립인천대학교" %}
                    {% assign logo = "incheon.png" %}
                {% elsif p.univ == "한양대학교" %}
                    {% assign logo = "hanyang.png" %}
                {% elsif p.univ == "서울시립대학교" %}
                    {% assign logo = "seoul.png" %}
                {% elsif p.univ == "숙명여자대학교" %}
                    {% assign logo = "sookmyung.png" %}
                {% elsif p.univ == "숭실대학교" %}
                    {% assign logo = "soongsil.png" %}
                {% elsif p.univ == "한국체육대학교" %}
                    {% assign logo = "sport.png" %}
                {% elsif p.univ == "인하대학교" %}
                    {% assign logo = "inha.png" %}
                {% elsif p.univ == "경희대학교" %}
                    {% assign logo = "kh.png" %}
                {% elsif p.univ == "국민대학교" %}
                    {% assign logo = "kookmin.png" %}
                {% elsif p.univ == "단국대학교" %}
                    {% assign logo = "dankook.png" %}
                {% elsif p.univ == "동국대학교" %}
                    {% assign logo = "dongkook.png" %}
                {% elsif p.univ == "나사렛대학교" %}
                    {% assign logo = "nazarene.png" %}
                {% elsif p.univ == "중앙대학교" %}
                    {% assign logo = "joongang_logo.png" %}
                {% elsif p.univ == "건국대학교" %}
                    {% assign logo = "kunkuk_logo.png" %}
                {% else %}
                    {% assign logo = "korea_logo.png" %}
                {% endif %}
                <td><img src="/assets/img/logo/{{logo}}" width="24px" height="24px" style="margin-right:4px"/>{{ p.univ }}</td>
                <td>{{ p.dept }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.high }}</td>
            </tr>
        {%- endfor -%}
    </tbody>

</table>