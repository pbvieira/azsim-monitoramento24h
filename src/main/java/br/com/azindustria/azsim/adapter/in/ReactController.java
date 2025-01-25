package br.com.azindustria.azsim.adapter.in;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {

    @GetMapping(value = "/{path:[^\\.]*}")
    public String forwardToReact() {
        return "index.html";
    }
}
