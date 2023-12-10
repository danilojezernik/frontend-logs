import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Logging} from "../models/logging";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class HypnosisStudioAlenService {

  _http = inject(HttpClient)

  // PRIVATE

  /**
   * Get all private logs
   * @returns Logging[]
   * **/
  getAllPrivateLogs(): Observable<Logging[]> {
    return this._http.get<Logging[]>(`${environment.backUrl}/logs_hsa/private`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  deletePrivateById(id: string): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/private/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  deletePrivate(): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/private`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // PUBLIC

  /**
   * Get all public logs
   * @returns Logging[]
   * **/
  getAllPublicLogs(): Observable<Logging[]> {
    return this._http.get<Logging[]>(`${environment.backUrl}/logs_hsa/public`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  deletePublicById(id: string): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/public/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }
  deletePublic(): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/public`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  // BACKEND

  /**
   * Get all backend logs
   * @returns Logging[]
   * **/
  getAllBackendLogs(): Observable<Logging[]> {
    return this._http.get<Logging[]>(`${environment.backUrl}/logs_hsa/backend`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error adding a new post:", error);
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }

  deleteBackendById(id: string): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/backend/${id}`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }
  deleteBackend(): Observable<any> {
    return this._http.delete<any>(`${environment.backUrl}/logs_hsa/backend`).pipe(
      catchError(error => {
        // Log an error message if an error occurs during the API call
        console.error("Error getting all the review data:", error)
        // Return a new observable with an error message if there's an error
        return throwError('Something went wrong')
      })
    )
  }
}
