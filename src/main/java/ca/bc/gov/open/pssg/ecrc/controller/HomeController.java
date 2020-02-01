package ca.bc.gov.open.pssg.ecrc.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	private final Logger log = LoggerFactory.getLogger(this.getClass());

	@GetMapping("/")
	public String home() {
		log.info("You've reached the Home Controller");
		return "home";
	}

}
