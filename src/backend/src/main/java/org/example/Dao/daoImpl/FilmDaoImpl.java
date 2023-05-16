package org.example.dao.daoImpl;

import org.example.dao.FilmDao;
import org.example.repository.FilmRepository;
import org.example.entity.Film;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FilmDaoImpl implements FilmDao {

    private final FilmRepository filmRepository;

    public FilmDaoImpl(FilmRepository filmRepository) {
        this.filmRepository = filmRepository;
    }

    @Override
    public List<Film> getAllFilms() {
        return filmRepository.findAll();
    }
}
