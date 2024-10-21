

import matplotlib.pyplot as plt

import random
##define a new population array y
y = [0]*N ##[0,0,...,0]
y[0] = 273.8 ##initial conditions
##run 50 simulations and plot
y = [0]*N ##[0,0,...,0]
y[0] = 273.8 ##initial conditions
for j in range(5):
    for n in range(N-1):
##generate random survvial and random recruitment rate
        random_survival_rate = random.normalvariate(
            mean_survival,
        (sd_survival)
)

random_recruitment = random.normalvariate(
        mean_recruitment,
        (sd_recruitment)
)
##y[n+1] = y[n]*survival_rate + recruitment
y[n+1] = y[n]*random_survival_rate + random_recruitment
plt.plot(time,y)

