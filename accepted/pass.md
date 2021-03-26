---
layout: sub
title: 🎊 합격자 명단 🎉
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
                <td><img src="/assets/img/logo/{% include logo_func.html univ=p.univ %}" width="24px" height="24px" style="margin-right:4px"/>{{ p.univ }}</td>
                <td>{{ p.dept }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.high }}</td>
            </tr>
        {%- endfor -%}
    </tbody>

</table>