package com.books.entities;

import javax.persistence.*;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    @Column(name = "title")
    private String title;

    @Column(name = "writer")
    private String writer;

    @Column(name = "date")
    private Long date;

    @Column(name = "cover")
    private String cover;

    @Column(name = "reviews")
    private String reviews ;


    public Book() {}

    public Book(String title, String writer, Long date, String cover,String reviews) {

        this.title = title;
        this.writer = writer;
        this.date = date;
        this.cover = cover;
        this.reviews = reviews;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public Long getDate() {
        return date;
    }

    public void setDate(Long date) {
        this.date = date;
    }
    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }
    public String getReviews() {
        return reviews;
    }

    public void setReviews(String reviews) {
        this.cover = reviews;
    }
}
