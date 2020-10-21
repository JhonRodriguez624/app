import { Injectable, Inject} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { REST_URL } from 'src/app/app.module';
import { UserData } from './userdata.model';



@Injectable({
  providedIn: 'root'
})

export class RestDataSource {
  
 constructor(private http: HttpClient, @Inject(REST_URL) private url: string) {}

 getData(): Observable<UserData[]> {
   return this.sendRequest<UserData[]>('GET', this.url);
   
 }

 saveData(userdata: UserData): Observable<UserData> {
    return this.sendRequest<UserData>("POST", this.url, userdata);

 }

 private sendRequest<T>(verb: string, url: string, body?: UserData)
 : Observable<T> {

 let myHeaders = new HttpHeaders();
 myHeaders = myHeaders.set("Access-Key", "<secret>");
 myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);

 return this.http.request<T>(verb, url, {
 body: body,
 headers: myHeaders
 });
 }

}
