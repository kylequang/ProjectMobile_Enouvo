{centers && centers.map(center => {
    return (
      <View style={styles.mainCard}>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: center.img }}
            style={styles.img}
          />
          <View style={styles.imgNumber}>
            <Text style={styles.numberText}>9.8</Text>
          </View>
          <View style={styles.logoImg}>
            <Image
              source={require('../../../assets/images/centres/product1.png')}
            />
          </View>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>
            {center.name}
          </Text>
          <View style={styles.mainText}>
            <Ionicons name="location-outline" size={20} color="#2D1F21" />
            <Text style={styles.mainSub}>
              1 Kerrs Road, Castle Hill, NSW 2154
            </Text>
          </View>
          <View
            style={[styles.mainText, { justifyContent: 'space-between' }]}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name="baby-face-outline"
                size={20}
                color="#2D1F21"
              />
              <Text style={styles.mainSub}>90 childrens</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={20}
                color="#2D1F21"
              />

              <Text style={styles.mainSub}>48 waitlisted</Text>
            </View>
          </View>
          <View
            style={[
              styles.mainText,
              {
                justifyContent: 'space-between',
              },
            ]}
          >
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="temperature-low"
                size={20}
                color="#2D1F21"
              />

              <TouchableOpacity
                style={[
                  styles.kindiCareButton,
                  { backgroundColor: '#E9F4FF' },
                ]}
              // onPress={()=>()}
              >
                <Text style={[styles.kindiCareText, { color: '#32A4FC' }]}>
                  KindiCare Basic
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <FontAwesome5
                name="hand-holding-water"
                size={20}
                color="#2D1F21"
              />
              <Text style={[styles.mainSub, { marginRight: 15 }]}>
                4 services
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  })
  }