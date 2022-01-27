import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,

 } from "react-native";

import ImageView from "react-native-image-viewing";
import { Rating } from "react-native-ratings";
import CardRate from "../../../components/CardRate";
import CardRateDetail from "../../../components/CardRateDetail";

const Ratings_ReviewsScreen = (props) => {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(true);
  const [card3, setCard3] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  const dropDown1 = () => {
    if (card1) {
      setCard1(false);
    } else {
      setCard1(true);
    }
  };
  const dropDown2 = () => {
    if (card2) {
      setCard2(false);
    } else {
      setCard2(true);
    }
  };
  const dropDown3 = () => {
    if (card3) {
      setCard3(false);
    } else {
      setCard3(true);
    }
  };

  const openSettingsModal = (img, index) => {
    let images = img.map((item) => ({ uri: item }));
    setModalImage(images);
    setModalVisible(!modalVisible);
    setImgIndex(index);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {card1 ? (
          <TouchableOpacity onPress={() => dropDown1()}>
            <CardRate
              img={require("../../../../assets/images/centres/rating/kindicare.jpg")}
              title="KindiCare Rating"
              subTitle="Very Good"
            ></CardRate>
          </TouchableOpacity>
        ) : (
          <CardRateDetail
            img={require("../../../../assets/images/centres/rating/kindicare.jpg")}
            title="KindiCare Rating"
            onPress={dropDown1}
          >
            <View style={styles.rate}>
              <Text style={styles.rateNum}>8.4</Text>
            </View>
            <Text style={styles.rateText}>Very Good</Text>
            <Image
              source={require("../../../../assets/images/centres/rating/rateChart.png")}
            />
            <View style={styles.desView}>
              <Text style={styles.desText}>
                The KindiCare Rating for this service of{" "}
                <Text style={styles.num}>8.4</Text> is lower than the average
                KindiCare Rating for the area of{" "}
                <Text style={styles.num}>8.6</Text>, and represents the good
                quality of service provided
              </Text>
            </View>
          </CardRateDetail>
        )}
        {card2 ? (
          <TouchableOpacity onPress={() => dropDown2()}>
            <CardRate
              img={require("../../../../assets/images/centres/rating/star.jpg")}
              title="User Reviews"
              subTitle="4.5/5"
            ></CardRate>
          </TouchableOpacity>
        ) : (
          <CardRateDetail title="User Reviews" onPress={dropDown2}>
            {props.userReviews.map(
              ({ username, role, dateReview, avatar, comment, star, img } , key) => {

                return (
                  <View style={styles.reviewView} key={key}>
                    <View style={styles.userStyle}>
                      <Image
                        style={styles.avatarStyle}
                        source={{
                          uri: `${avatar}`,
                        }}
                      />
                      <View style={styles.userName}>
                        <Text style={styles.nameText}>{username}</Text>
                        <Text style={styles.childText}>{role}</Text>
                      </View>
                      <View style={styles.starView}>
                        <Rating
                          type="custom"
                          ratingCount={star}
                          startingValue={star}
                          imageSize={18}
                          readonly={true}
                          ratingColor="#DB147F"
                          tintColor="white"
                        />
                        <Text style={styles.date}>{dateReview}</Text>
                      </View>
                    </View>
                    <Text style={styles.reviewText}>{comment}</Text>

                    <View style={styles.imgView}>
                      {img.map((items, index) => {
                        return (
                          <TouchableOpacity key={index}
                            style={styles.imgItem}
                            onPress={() => {
                              openSettingsModal(img, index);
                            }}
                            key={index}
                          >
                            <Image
                              style={styles.imgStyle}
                              source={{
                                uri: `${items}`,
                              }}
                            />
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                );
              }
            )}  
          </CardRateDetail>
        )}

        <ImageView
          images={modalImage}
          imageIndex={imgIndex}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        />

        {card3 ? (
          <TouchableOpacity onPress={() => dropDown3()}>
            <CardRate
              img={require("../../../../assets/icons/NQSIcon.jpg")}
              title="NQS Rating"
              subTitle="Last reviewed 21 September 2017"
            ></CardRate>
          </TouchableOpacity>
        ) : (
          <CardRateDetail title="NQS Rating" onPress={dropDown3}>
            <Image
              source={require("../../../../assets/images/centres/rating/NQS.jpg")}
            />
            <Text style={styles.subTitle3}>Last Reviewed 01 December 2019</Text>

            {props.nqsrating.map((item) => {
              return (
                <View style={styles.rowDetail} key={item.id}>
                  <Text style={styles.detailLeft}>{item.criteria}</Text>
                  <Text style={styles.detailRight}>{item.rate}</Text>
                </View>
              );
            })}
          </CardRateDetail>
        )}
      </View>
    </ScrollView>
  );
};

export default Ratings_ReviewsScreen;

const styles = StyleSheet.create({
  cardContent1: {},
  desView: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  rate: {
    marginVertical: 16,
    height: 60,
    width: 60,
    backgroundColor: "#DB147F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  rateNum: {
    color: "#ffff",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 32,
  },
  rateText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
  desText: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 27,
  },
  num: {
    color: "#32A4FC",
  },
  subTitle3: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#857E7F",
    paddingBottom: 8,
  },
  rowDetail: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  detailLeft: {
    width: "70%",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "400",
  },
  detailRight: {
    fontSize: 12,
    color: "#FB8429",
    lineHeight: 16,
    fontWeight: "700",
  },
  //user review
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  reviewView: {
    paddingTop: 16,
  },
  userStyle: {
    flexDirection: "row",
    paddingLeft: 16,
    alignItems: "center",
  },
  userName: {
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 17.57,
  },
  childText: {
    color: "#32A4FC",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: 16,
  },
  starView: {
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
  date: {
    color: "#857E7F",
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "700",
  },
  reviewText: {
    paddingLeft: 16,
    paddingBottom: 12,
    paddingTop: 14,
  },
  imgView: {
    flexDirection: "row",
    marginLeft: 8,
  },
  imgItem: {
    paddingLeft: 8,
  },
  imgStyle: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  imgModal: {
    width: 400,
    height: 400,
  },
  imgModalView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
});
