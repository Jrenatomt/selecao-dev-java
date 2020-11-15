package com.renato.softperson.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/source")
public class GitSource {
	
	@GetMapping
	public String getGit() {
		return "https://github.com/Jrenatomt/selecao-dev-java";
	}

}
