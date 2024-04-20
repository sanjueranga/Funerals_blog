import React from "react";
import { Typography, Grid } from "@mui/material";

const PostBody = () => {
  const postBody = {
    intro: `The first step toward saving your money in arranging a simple funeral is to choose a funeral director who specializes in low-cost funerals as their cost of funeral planning is a lot cheaper than that of traditional funeral directors you may find. Do simple research for the cheapest funeral directors near you and compare their prices before jumping to conclusions.
        Here are some practical tips that you may find helpful in forming your funeral wishes or arranging a low-cost yet meaningful funeral for a loved one.`,
  };

  const funeralOptions = [
    {
      title: "1. Low-Cost Funeral Options",
      description:
        "Cremation is usually a less expensive substitute to burials. The cheapest funeral type in the UK is direct cremation and, it has gained much popularity among the people during the previous years. This funeral option does not have a funeral service and is not attended by any mourners at the crematorium. If you wish to be at the crematorium while expecting a simple funeral plan, you can find other methods to cut out the extra funeral costs.",
    },
    {
      title: "2. Cheaper Burial Plots and Grave Markers",
      description:
        "If the funeral wishes of your loved one request a burial, you can ask your funeral director to help you find a cheaper burial plot. Usually, city plots such as in London tend to be more expensive than rural areas. Check whether the non-residents have to pay a lot extra than the locals before choosing the burial plot. Flat headstones with a simple message of remembrance are a lot cheaper than upright headstones. Instead of a plaque, you can plant a tree in memory of your loved one that will save you money for the other funeral expenses.",
    },
    {
      title: "3. Affordable Funeral Venue and Reception",
      description:
        "You can arrange the funeral service in your home, outside or in any venue that means a lot to your loved one. With permission to use the location, you may find it a lot cheaper than using traditional funeral venues. If the funeral service is held at a church or a crematorium, you will be provided with a free location for the reception such as a park. If not, you can plan the funeral reception at home and instead of hiring a catering service, you can ask the people to bring the food.",
    },
    {
      title: "4. Low-Cost Funeral Transport",
      description:
        "There are many affordable vehicle options for you to proceed with the funeral procession. Your funeral director will help you find cheaper vehicle options to accompany your loved one to the crematorium or the burial plot. Usually, cars are inexpensive when compared to hiring alternative hearses such as motorcycles or jeeps.",
    },
    {
      title: "5. Cheap Funeral Flowers",
      description:
        "With the help of close friends and family, you can decorate the funeral venue with simple flower decorations. You can get the flowers from your garden and frame a picture of your loved one to include in the decorations. This may allow the bereaved to take part in arranging the funeral that would be a lot more personal than a traditional funeral arrangement. If you are thinking of cheaper options in planning your funeral, you can mention that you prefer flowers from your garden in your funeral wishes.",
    },
    {
      title: "6. Cheap Funeral Music",
      description:
        "Your funeral director will help you with a list of some affordable funeral singers with whom you would be able to negotiate the fee. Instead of hiring professional funeral singers, you can ask someone who can sing well in your circle to perform as a tribute to the loved one. This option is cost-cutting but make sure you ask from the right people as it will be difficult for the closest friends and family to fulfil such a request.",
    },
    {
      title: "7. Low-Cost Coffin Options",
      description:
        "Instead of the wooden coffin, there are plenty of other eco-friendly and cost-cutting coffin options such as shrouds or cardboard coffins. Remember to consider if your options meet the crematorium and burial regulations.",
    },
    {
      title: "8. Obituaries",
      description:
        "You can post the obituaries online that is effective and cost-cutting than posting them in newspapers. Ask the friends and families to announce the death and share the death notice via social media or email that would not cost extra. Online obituaries have become popular in the UK as it is easy to find the death records online than from the traditional newspaper death notices.",
    },
    {
      title: "9. Bereavement Support",
      description:
        "Grief that the closest family members and friends have to overcome after losing someone dear to them can be tremendous and often require extra support. In these instances, you can take help from volunteer groups and organizations that provide professional bereavement support for free. When there are instances the bereaved require help to overcome the pain that may be emotional or physical, the closest family members and friends can gather to help each other and share the pain. This method is highly effective because the familiarity will invite the bereaved to openly express their pain which is considered the first step toward healing.",
    },
    {
      title: "10. Choose a Budget Funeral Plan",
      description:
        "If you are saving financial provisions to pay for your funeral someday and do not wish it to be extravagant, you can go for cheap funeral plans. In preparing the funeral wishes, you can mention these affordable funeral options and ideas that may eventually release the bereaved and loved ones from the burden of bearing higher funeral costs. Paying into a funeral plan beforehand will ensure that your family will have enough funeral funds to proceed with your funeral wishes without stress.",
    },
  ];

  return (
    <Grid container spacing={1}>
      {funeralOptions.map((option, index) => (
        <Grid item xs={12} key={index}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              alignContent: "center",
              py: 2,
            }}
          >
            {postBody.intro}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              fontFamily: "Inter",
              paddingTop: 2,
            }}
          >
            {option.title}
          </Typography>
          <Typography
            sx={{ fontFamily: "Inter", fontSize: "16px", textAlign: "justify" }}
          >
            {option.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostBody;
