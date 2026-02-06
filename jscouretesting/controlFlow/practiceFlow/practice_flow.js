let personRole = "Employee";           // Roles posibles: Employee, Enrolled Member, Subscriber, Non-Subscriber

let personWeight = 75;               // Peso en kg (para determinar necesidades dietéticas)
let dailyRoutine = "active";   

let dietaryAccess = "";
let servicesProvided = "";
let personalizedMessage = "";

if (personRole === "Employee") {
    dietaryAccess = "Full authorization to Dietary Services";

    userMessage = "Welcome, Employee! You have access to Dietary Services.";
    // Considerar peso y rutina para recomendaciones específicas
    if (personWeight > 90 && dailyRoutine === "sedentary") {
        servicesProvided = "Weight management program + Standard dietary plan";
    } else if (dailyRoutine === "active" || dailyRoutine === "very_active") {
        servicesProvided = "High-energy dietary plan + Nutritional supplements";
    } else {
        servicesProvided = "Standard dietary services";
    }
    personalizedMessage = `Employee authorized. Based on your weight (${personWeight}kg) and ${dailyRoutine} routine: ${servicesProvided}`;

}  else if (personRole === "Enrolled Member") {
    dietaryAccess = "Authorization to Dietary Services and one-on-one dietitian interaction";
    
    // Miembros inscritos obtienen plan personalizado
    if (personWeight < 60 && dailyRoutine === "active") {
        servicesProvided = "Weight gain plan + Personalized dietitian consultations";
    } else if (personWeight > 80) {
        servicesProvided = "Weight loss program + Weekly dietitian sessions";
    } else {
        servicesProvided = "Balanced diet plan + Monthly dietitian check-ins";
    }    
    personalizedMessage = `Enrolled Member authorized. Personalized plan for ${personWeight}kg, ${dailyRoutine} routine: ${servicesProvided}`; 

} else if (personRole === "Subscriber") {
    dietaryAccess = "Partial authorization to facilitate Dietary Services only";
    
    // Suscriptores: acceso limitado basado en rutina
    if (dailyRoutine === "sedentary") {
        servicesProvided = "Basic meal suggestions only";
    } else if (dailyRoutine === "moderate" || dailyRoutine === "active") {
        servicesProvided = "Standard meal plans (no customization)";
    } else {
        servicesProvided = "Limited dietary resources";
    }
    
    personalizedMessage = `Subscriber authorized. ${servicesProvided} based on ${dailyRoutine} routine. Weight analysis not available.`;

} else if (userRole === "non-Subscriber") {
    accessLevel = "No access to Dietary Services";
    userMessage = "Welcome, Non-Subscriber! You need to be enrolled or at least a Subscriber to avail this facility.";
} else {
    accessLevel = "Unknown access level";
    userMessage = "Welcome! Your user role is not recognized.";
}

// Mostrar resultados
console.log("=== Dietary Services Authorization System ===");
console.log("Role:", personRole);
console.log("Weight:", personWeight + "kg");
console.log("Daily Routine:", dailyRoutine);
console.log("Access Level:", dietaryAccess);
console.log("Message:", personalizedMessage);
console.log("=============================================");

// Sistema de autorización con switch
switch (personRole) {
    case "Employee":
        dietaryAccess = "Full authorization to Dietary Services";
        
        // Considerar peso y rutina para Employee
        if (personWeight > 90 && dailyRoutine === "sedentary") {
            servicesProvided = "Weight management program";
        } else if (dailyRoutine === "active" || dailyRoutine === "very_active") {
            servicesProvided = "High-energy dietary plan";
        } else {
            servicesProvided = "Standard dietary services";
        }
        
        personalizedMessage = `Employee: ${servicesProvided} for ${personWeight}kg, ${dailyRoutine} routine`;
        break;
        
    case "Enrolled Member":
        dietaryAccess = "Authorization to Dietary Services + Dietitian";
        
        // Plan personalizado para miembros
        switch (true) {
            case (personWeight < 60 && dailyRoutine === "active"):
                servicesProvided = "Weight gain plan + Weekly consultations";
                break;
            case (personWeight > 80):
                servicesProvided = "Weight loss program + Bi-weekly sessions";
                break;
            default:
                servicesProvided = "Balanced plan + Monthly check-ins";
        }
        
        personalizedMessage = `Enrolled Member: ${servicesProvided}`;
        break;
        
    case "Subscriber":
        dietaryAccess = "Partial authorization only";
        
        // Acceso limitado por rutina
        switch (dailyRoutine) {
            case "sedentary":
                servicesProvided = "Basic meal suggestions";
                break;
            case "moderate":
            case "active":
                servicesProvided = "Standard meal plans";
                break;
            case "very_active":
                servicesProvided = "Limited dietary resources";
                break;
            default:
                servicesProvided = "General guidelines";
        }
        
        personalizedMessage = `Subscriber: ${servicesProvided} (no weight analysis)`;
        break;
        
    case "Non-Subscriber":
        dietaryAccess = "No authorization";
        
        // Mensaje persuasivo según necesidades
        if (personWeight > 100) {
            personalizedMessage = `Urgent: Enroll for weight management (${personWeight}kg)`;
        } else if (dailyRoutine === "very_active") {
            personalizedMessage = "Enroll for active lifestyle dietary support";
        } else {
            personalizedMessage = "Subscribe or enroll to access services";
        }
        break;
        
    default:
        dietaryAccess = "Role not recognized";
        personalizedMessage = "Contact HR to verify your role";
}
// Mostrar resultados
console.log("=== Dietary Services (Switch Version) ===");
console.log("Role:", personRole);
console.log("Access:", dietaryAccess);
console.log("Message:", personalizedMessage);
console.log("==========================================");