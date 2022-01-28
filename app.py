# -*- coding: utf-8 -*-
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
import numpy as np
import pandas as pd
import pickle
import joblib
from flask import Flask, request, render_template
from flask_cors import cross_origin
from predict_disease import Predict
from description_prediction import Description
from precaution_detection import Precaution
from hospitals import Hospitals
import datetime
import model as m


# Load ML model
model_heart = pickle.load(open('heartmodel.pkl', 'rb')) 
model_diabetes = pickle.load(open('diabetesmodel.pkl', 'rb'))
model_stroke = pickle.load(open("strokemodel.pkl", 'rb'))
model_breastcancer = pickle.load(open('breastcancermodel.pkl', 'rb'))
scaler1 = pickle.load(open('scaler1.pkl', 'rb'))
model_cancer = pickle.load(open('cancermodel.pkl', 'rb'))
scaler = pickle.load(open('scaler.pkl', 'rb'))
# Create application
app = Flask(__name__)
app.config["DEBUG"] = True
# user info
user_info = []
hosp_name = []
# user choices while choosing symptoms
symptoms = ['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
            'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
            'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
            'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
            'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
            'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
            'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
            'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
            'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
            'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
            'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
            'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
            'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
            'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
            'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
            'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
            'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
            'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
            'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
            'yellow_crust_ooze']

# Bind home function to URL
@app.route('/')
@cross_origin()
def home():
    return render_template('home.html')

@app.route('/diagnosis')
@cross_origin()
def diagnosis():
    return render_template('diagnosis.html')

@app.route('/about')
@cross_origin()
def about():
    return render_template('about.html')

@app.route('/consultation')
@cross_origin()
def consultation():
    return render_template('consultation.html')

@app.route('/mental')
@cross_origin()
def mental():
    return render_template('mental.html')

@app.route('/heartdisease')
@cross_origin()
def heart():
    return render_template('heartdisease.html')

# Bind predict function to URL
@app.route('/predictheartdisease', methods =["GET", "POST"])
@cross_origin()
def predict():
    if request.method == "POST":
        # Put all form entries values in a list 
        features = [float(i) for i in request.form.values()]
        # Convert features to array
        array_features = [np.array(features)]
        # Predict features
        prediction = model_heart.predict(array_features)
        
        output = prediction
        
        # Check the output values and retrive the result with html tag based on the value
        if output == 1:
            return render_template('lowrisk.html')
        else:
            return render_template('highrisk.html')
    return render_template('heartdisease.html')
@app.route('/diabetes')
def diabetes():
	return render_template('diabetes.html')

@app.route('/predictdiabetes', methods =["GET", "POST"])
def predictdiabetes():
    if request.method == 'POST':
        preg = request.form['pregnancies']
        glucose = request.form['glucose']
        bp = request.form['bloodpressure']
        st = request.form['skinthickness']
        insulin = request.form['insulin']
        bmi = request.form['bmi']
        dpf = request.form['dpf']
        age = request.form['age']
        
        data = np.array([[preg, glucose, bp, st, insulin, bmi, dpf, age]])
        dbprediction = model_diabetes.predict(data)
        
        if dbprediction == 1:
            return render_template('lowrisk.html')
        else:
            return render_template('highrisk.html')
    return render_template('diabetes.html')
 
@app.route('/stroke')
def stroke():
    return render_template('stroke.html')

@app.route('/predictstroke', methods =["GET", "POST"])
def predictstroke():
    gender=int(request.form['gender'])
    age=int(request.form['age'])
    hypertension=int(request.form['hypertension'])
    heart_disease = int(request.form['heart_disease'])
    ever_married = int(request.form['ever_married'])
    work_type = int(request.form['work_type'])
    Residence_type = int(request.form['Residence_type'])
    avg_glucose_level = float(request.form['avg_glucose_level'])
    bmi = float(request.form['bmi'])
    smoking_status = int(request.form['smoking_status'])

    x=np.array([gender,age,hypertension,heart_disease,ever_married,work_type,Residence_type,
                avg_glucose_level,bmi,smoking_status]).reshape(1,-1)


    x=scaler1.transform(x)

    
    dt=joblib.load('dt.sav')

    Y_pred=dt.predict(x)

    # for No Stroke Risk
    if Y_pred==0:
        return render_template('lowrisk.html')
    else:
        return render_template('highrisk.html')
@app.route('/liverdisease')
def liver():
    return render_template("liverdisease.html")   
def ValuePred(to_predict_list, size):
    to_predict = np.array(to_predict_list).reshape(1,size)
    if(size==7):
        loaded_model = joblib.load('liver_model.pkl')
        result = loaded_model.predict(to_predict)
    return result[0]


@app.route('/predictliver', methods=["GET", "POST"])
def predictliver():
    if request.method == "POST":
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
        if len(to_predict_list) == 7:
            result = ValuePred(to_predict_list, 7)

    if int(result) == 1:
        return render_template('highrisk.html')
    else:
        return render_template('lowrisk.html')

@app.route("/kidneydisease")
def kidney():
    return render_template("kidneydisease.html")

def ValuePredictor(to_predict_list, size):
    to_predict = np.array(to_predict_list).reshape(1, size)
    if size == 7:
        loaded_model = joblib.load('kidney_model.pkl')
        result = loaded_model.predict(to_predict)
    return result[0]
@app.route("/predictkidney",  methods=['GET', 'POST'])
def predictkidney():
    if request.method == "POST":
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
        if len(to_predict_list) == 7:
            result = ValuePredictor(to_predict_list, 7)
    if(int(result) == 1):
        return render_template("highrisk.html")
    else:
        return render_template("lowrisk.html")
    
@app.route("/breastcancer")
def breastcancercancer():
    return render_template("breastcancer.html")  

@app.route('/predictbreastcancer',methods=['POST'])
def predictcancer():

    features = [float(x) for x in request.form.values()]
    final_features = [np.array(features)]
    final_features = scaler.transform(final_features)    
    prediction = model_cancer.predict(final_features)
    y_probabilities_test = model_cancer.predict_proba(final_features)
    y_prob_success = y_probabilities_test[:, 1]
    print("final features",final_features)
    print("prediction:",prediction)
    output = round(prediction[0], 2)
    y_prob=round(y_prob_success[0], 3)
    print(output)

    if output == 0:
        return render_template('lowrisk.html')
    else:
        return render_template('highrisk.html')
    
@app.route("/pneumonia")
def pneumonia():
    return render_template("pneumonia.html")

@app.route('/register' , methods = ['GET', 'POST'])
def register():
    return render_template('register.html')

# this happens when you submit the registeration form
# and takes you to symptoms's page
@app.route('/registerd_succesfully' , methods = ['GET', 'POST'])
def disease_prediction():

    if request.method == 'POST':
        first_name = request.form['first-name']
        last_name = request.form['last-name']
        email = request.form['email']
        mobile_no = request.form['mobile']
        pincode = request.form['pincode']
        gender = request.form['gender']

        username = first_name + ' ' + last_name
        user_email = email
        user_number = mobile_no
        user_pincode = pincode
        user_gender = gender

        user_info.append(username)
        user_info.append(user_email)
        user_info.append(user_number)
        user_info.append(user_pincode)
        user_info.append(user_gender)

        # go to next section: i.e. prediction page
        return render_template('disease-prediction.html', symptoms=sorted(symptoms))

    return render_template('register.html')

global predicted_disease
@app.route('/result' , methods = ['GET', 'POST'])
def result():
    
    if request.method == 'POST':
    
        symptom1 = request.form['Symptom_1']
        symptom2 = request.form['Symptom_2']
        symptom3 = request.form['Symptom_3']
        symptom4 = request.form['Symptom_4']
        symptom5 = request.form['Symptom_5']

        if symptom3 == 'Choose':
            symptom3 = 0

        if symptom4 == 'Choose':
            symptom4 = 0

        if symptom5 == 'Choose':
            symptom5 = 0

        

        predict1 = Predict(symptom1,symptom2, symptom3, symptom4, symptom5)
        predicted_disease = predict1.symptom_predicition()
        predicted_disease = predicted_disease[0]
        print(predicted_disease)

        

        dis = Description(f'{predicted_disease}')
        txt = dis.display()
        print(txt)

        dis2 = Precaution(f'{predicted_disease}')
        txt2 = dis2.display()
        print(txt2)
        
        return render_template('result.html', predicted_disease=predicted_disease, txt=txt, txt2=txt2)
    return render_template('disease-prediction.html')


@app.route('/hospital' , methods = ['GET', 'POST'])
def hospital():
    
    user_pincode = user_info[3]
    print(user_pincode)
    hos = Hospitals(user_pincode)
    available_hospitals = hos.list_hospitals()

    return render_template('hospital.html', available_hospitals=available_hospitals)

@app.route('/<hospital_name>', methods = ['GET', 'POST'])
def book_appointment(hospital_name):
    
    hosp_name.append(hospital_name)
    #hosp_name.remove('favicon.ico')
    
    if 'favicon.ico' in hosp_name:
        hosp_name.remove('favicon.ico')

    #print(hospital_name)
    print(hosp_name)


    return render_template('book-app.html', hospital_name=hospital_name)


@app.route('/thankyou')
def thankyou():
    return(render_template('thankyou.html'))

@app.route('/pet')
def pet():
    return(render_template('pet.html'))

@app.route('/journal')
def journal():
    return(render_template('journal.html'))

@app.route('/art')
def art():
    return(render_template('art.html'))

@app.route('/booking_done', methods = ['GET', 'POST'])
def booking():

    if request.method == 'POST':
        date = request.form['date']
        time = request.form['time']

        new_date = datetime.datetime.strptime(date, '%Y-%m-%d').strftime('%d/%m/%y')
        del user_info[:]
        del hosp_name[:]

        return(render_template('thankyou.html'))

    return render_template('book-app.html')


@app.route("/Formpage.html")
def formpage():
    return render_template("Formpage.html")

@app.route("/Formpage" , methods=['GET', 'POST'])
def survey():
    if request.method == 'POST':
        q2 = request.form['q2']
        q3 = request.form['q3']
        q4 = request.form['q4']
        q5 = request.form['q5']
        q6 = request.form['q6']
        q7 = request.form['q7']

        q2 = int(q2)
        q3 = int(q3)
        q4 = int(q4)
        q5 = int(q5)
        q6 = int(q6)
        q7 = int(q7)
        print(q2, q3, q4, q5, q6 ,q7)
        prediction = m.model(q2,q3,q4,q5,q6,q7)

        # print(type(prediction))
        if prediction > 10:
            return render_template("Predictions.html" , prediction = int(prediction))


    return render_template("Formpage.html")


if __name__ == '__main__':
#Run the application
    app.run()
    
    