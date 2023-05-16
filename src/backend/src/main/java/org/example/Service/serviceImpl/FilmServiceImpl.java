package org.example.service.serviceImpl;

import org.example.dao.FilmDao;
import org.example.service.FilmService;
import org.example.entity.Film;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmServiceImpl implements FilmService {

    private final FilmDao filmDao;

    public FilmServiceImpl(FilmDao filmDao) {
        this.filmDao = filmDao;
    }

    @Override
    public List<Film> getAllFilms() {
        return filmDao.getAllFilms();
    }
}
