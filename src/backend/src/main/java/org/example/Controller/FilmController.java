package org.example.controller;

import jakarta.transaction.Transactional;
import org.example.service.FilmService;
import org.example.entity.Film;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Transactional
public class FilmController {
    private final FilmService filmService;

    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }


    @RequestMapping(value = "/api/films", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }
}
