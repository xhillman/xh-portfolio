package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {

	homeHandler := func(w http.ResponseWriter, r *http.Request) {
		templ, err := template.ParseFiles("html/layouts/layout.html", "html/pages/home.html")
		if err != nil {
			log.Fatal(err)
		}

		hxRequest := r.Header.Get("Hx-Request")
		if hxRequest == "true" {
			templ, err := template.ParseFiles("html/pages/home.html")
			if err != nil {
				log.Fatal(err)
			}
			templ.Execute(w, nil)
			return
		}
		templ.Execute(w, nil)
	}

	blogHandler := func(w http.ResponseWriter, r *http.Request) {
		templ, err := template.ParseFiles("html/layouts/layout.html", "html/pages/blog.html")
		if err != nil {
			log.Fatal(err)
		}
		hxRequest := r.Header.Get("Hx-Request")
		if hxRequest == "true" {
			templ, err := template.ParseFiles("html/pages/blog.html")
			if err != nil {
				log.Fatal(err)
			}
			templ.Execute(w, nil)
			return
		}
		templ.Execute(w, nil)
	}

	projectsHandler := func(w http.ResponseWriter, r *http.Request) {
		templ, err := template.ParseFiles("html/layouts/layout.html", "html/pages/projects.html")
		if err != nil {
			log.Fatal(err)
		}
		hxRequest := r.Header.Get("Hx-Request")
		if hxRequest == "true" {
			templ, err := template.ParseFiles("html/pages/projects.html")
			if err != nil {
				log.Fatal(err)
			}
			templ.Execute(w, nil)
			return
		}
		templ.Execute(w, nil)
	}

	aboutHandler := func(w http.ResponseWriter, r *http.Request) {
		templ, err := template.ParseFiles("html/layouts/layout.html", "html/pages/about.html")
		if err != nil {
			log.Fatal(err)
		}
		hxRequest := r.Header.Get("Hx-Request")
		if hxRequest == "true" {
			templ, err := template.ParseFiles("html/pages/about.html")
			if err != nil {
				log.Fatal(err)
			}
			templ.Execute(w, nil)
			return
		}
		templ.Execute(w, nil)
	}

	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js"))))

	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/blog", blogHandler)
	http.HandleFunc("/projects", projectsHandler)
	http.HandleFunc("/about", aboutHandler)

	log.Fatal(
		http.ListenAndServe(":8000", nil))
}
