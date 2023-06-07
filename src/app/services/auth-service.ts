import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router, private snackBar: MatSnackBar) { }

    getAuthorizationToken() {
        const token = localStorage.getItem('jwt_token');

        if (!token) {
            // Rediriger l'utilisateur vers la page de login
            this.router.navigate(['/user-profile']);

            // Afficher une notification indiquant qu'il n'est pas connecté
            this.snackBar.open('Vous n\'êtes pas connecté.', 'Fermer', {
                duration: 3000,
            });

            return null;
        }

        return token;
    }

    setJWTtoken(token: string) {
        localStorage.setItem('jwt_token', token);
    }
}
