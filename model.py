def model(a,b,c,d,e,f):
    
    # Importing the necessary libraries
    import pandas as pd
    # import numpy as np
    
    import numpy as np
    # for dataframe manipulations
    import pandas as pd

    
    data = pd.read_csv('med-insurance.csv')
    # As we can see from the above chart that having 4 and 5 childrens is having similar impact on expenses
# so let's cap these values

    data['children'] = data['children'].replace((4, 5), (3, 3))

# lets check the value counts
    
    # lets perform encoding

# as we know males have higher expense than females, lets encode males as 2, and females as 1, 
# similarly smokers, have highers expense, so we will encode smokers as 2, and non smokers as 1,
# as we know that the south east region has higher expense than other regions

    data['sex'] = data['sex'].replace(('male','female'), (2, 1))
    data['smoker'] = data['smoker'].replace(('yes','no'), (2, 1))
    data['region'] = data['region'].replace(('southeast','southwest','northeast','northwest'),(2, 1, 1, 1))

# let's check whether any categorical column is left
    data.select_dtypes('object').columns

    y = data['expenses']
    x = data.drop(['expenses'], axis = 1)
    from sklearn.model_selection import train_test_split

    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 0)
    # lets perform standardization

    #from sklearn.preprocessing import StandardScaler

    #sc = StandardScaler()
    #x_train = sc.fit_transform(x_train)
    #x_test = sc.transform(x_test)

    #from sklearn.ensemble import GradientBoostingRegressor

    #model = GradientBoostingRegressor()
    #model.fit(x_train, y_train)

   # from sklearn.linear_model import LinearRegression

    #model = LinearRegression()
    #model.fit(x_train, y_train)
    from sklearn.ensemble import GradientBoostingRegressor

    model = GradientBoostingRegressor()
    model.fit(x_train, y_train)

    y_pred3 = model.predict(x_test)



    #import pickle
    #pickle.dump(model,open('model.pkl','wb'))
    #model = pickle.load(open('model.pkl','rb'))




    # Trying to correct some cofficient values
    # model.coef_[0] = 0.4
    # model.coef_[3] = 0.2
    # model.coef_[2] = 0.2
    # print(model.coef_[0],model.coef_[1],model.coef_[2],model.coef_[3],model.coef_[4])

    # Taking input2

    modelInput = model.predict([[a,b,c,d,e,f]])

    return (modelInput)



#if __name__ == "__main__":
    #a = int(input("Any Smoker from your family"))
    #b = int(input("How many children do u have in your family?"))
    #c = int(input("Your age ?"))
    #d = int(input("Enter your BMI"))
    #e = int(input("sex"))
    #f= int(input("Enter your region"))
    #print(model(a,b,c,d,e,f))
