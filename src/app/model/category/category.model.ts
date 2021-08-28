
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
//import { catchError } from "rxjs/operators";
import {host} from "../../config/confighttp"
import { Injectable, Inject, InjectionToken } from "@angular/core";


export class Category {
    constructor(public _id?: string, public id?: number,
        public name?: string,
        public description?: string,
        public imageUrl?: string,
        public __v?
        ) { }

    
}
@Injectable()
export class CategoryModel{
    private Categorys: Category[];
    private locator = (p: Category, id: number) => p.id == id;
    private url = host 
    
    constructor(private http: HttpClient) {
        this.Categorys = new Array<Category>();
        
        this.getData().subscribe(data => this.Categorys = data);
    }
    test(){
        console.log(this.getData);
        return this.getData();
    }
    getCategorys(): Category[] {
       console.log(this.Categorys);
        return this.Categorys;
    }
    getCategory(id: number): Category {
        return this.Categorys.find(p => this.locator(p, id));
    }
    saveCategory(category: Category) {
        if (category.id == null) {
           // category.id = this.generateID();
            this.save(category);
            this.Categorys.push(category);
        } else {
            let index = this.Categorys
                .findIndex(p => this.locator(p, category.id));
            this.update( category);
            this.Categorys.splice(index, 1, category);
        }
    }
    deleteCategory(id: number) {
        let index = this.Categorys.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.delete(id);
            this.Categorys.splice(index, 1);
        }
    }
 /*   private generateID(): number {
        let candidate = this.Categorys.length + 1;
        return candidate;
    } */
   private getData(): Observable<any> {
       return this.http.get<any>('http://localhost:3000/category');
    }
   private save(category: Category): Observable<Category> {
        return this.http.post<Category>(this.url, category);
    }
   private update(category: Category): Observable<Category> {
        return this.http.put<Category>(`${this.url}/${category.id}`, category);
    }
   private delete(id: number): Observable<Category> {
        return this.http.delete<Category>(`${this.url}/${id}`);
    }

/*    private sendRequest<T>(verb: string, url: string, body?: Category)
        : Observable<T> {
        let myHeaders = new HttpHeaders();
        myHeaders = myHeaders.set("Access-Key", "<secret>");
        myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);
        return this.http.request<T>(verb, url, {
            body: body,
            headers: myHeaders
        }).pipe(catchError((error: Response) =>
            throwError(`Network Error: ${error.statusText} (${error.status})`)));
    }*/
}