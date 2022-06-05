package com.newlandbv.multilogin.webservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MultiLoginWebserviceApplication {

  private static final String  ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";

  public static void main(String[] args) {
    SpringApplication.run(MultiLoginWebserviceApplication.class, args);
  }

  @Bean
  public WebMvcConfigurer corsConfigure(){
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOriginPatterns("http://localhost:*");
      }
    };
  }

}
