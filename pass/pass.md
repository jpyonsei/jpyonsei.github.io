---
layout: sub
title: 합격자 명단
---
<br/>
<table class="table ">
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
                <td><img src="/assets/img/pass/yonsei_logo.png" width="24px" height="24px" style="margin-right:3px"/>{{ p.univ }}</td>
                <td>{{ p.dept }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.high }}</td>
            </tr>
        {%- endfor -%}
    </tbody>

</table>